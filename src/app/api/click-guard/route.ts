import { NextRequest, NextResponse } from "next/server";

const CUSTOMER_ID = "7898879913";
const CAMPAIGN_ID = "23740221071";
const API_VERSION = "v20";
const BASE_URL = `https://googleads.googleapis.com/${API_VERSION}/customers/${CUSTOMER_ID}`;

async function getAccessToken(): Promise<string> {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_ADS_CLIENT_ID!,
      client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN!,
      grant_type: "refresh_token",
    }),
  });
  const data = await res.json();
  return data.access_token;
}

async function blockIpInGoogleAds(ip: string): Promise<boolean> {
  const token = await getAccessToken();
  const res = await fetch(`${BASE_URL}/googleAds:mutate`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "developer-token": process.env.GOOGLE_ADS_DEVELOPER_TOKEN!,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      mutateOperations: [
        {
          campaignCriterionOperation: {
            create: {
              campaign: `customers/${CUSTOMER_ID}/campaigns/${CAMPAIGN_ID}`,
              negative: true,
              ipBlock: { ipAddress: ip },
            },
          },
        },
      ],
    }),
  });
  return res.ok;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { action } = body; // "visit" or "conversion"

  // Get visitor IP
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (ip === "unknown") {
    return NextResponse.json({ status: "no-ip" });
  }

  // Read current state from cookie
  const cookieStore = request.cookies;
  const visitCount = parseInt(cookieStore.get("_cg_v")?.value || "0", 10);
  const converted = cookieStore.get("_cg_c")?.value === "1";
  const blocked = cookieStore.get("_cg_b")?.value === "1";

  // Already blocked or converted - skip
  if (blocked) {
    return NextResponse.json({ status: "already-blocked" });
  }

  if (action === "conversion") {
    // User performed a real action (phone click, form submit, whatsapp)
    const response = NextResponse.json({ status: "conversion-tracked" });
    response.cookies.set("_cg_c", "1", {
      httpOnly: true,
      maxAge: 86400 * 30, // 30 days
      path: "/",
    });
    return response;
  }

  // action === "visit"
  if (converted) {
    return NextResponse.json({ status: "converted-user" });
  }

  const newCount = visitCount + 1;

  if (newCount >= 4) {
    // Block this IP in Google Ads
    console.log(`[ClickGuard] Blocking IP: ${ip} (${newCount} visits, no conversion)`);

    const success = await blockIpInGoogleAds(ip);

    const response = NextResponse.json({
      status: success ? "blocked" : "block-failed",
      ip,
      visits: newCount,
    });

    response.cookies.set("_cg_b", "1", {
      httpOnly: true,
      maxAge: 86400 * 90, // 90 days
      path: "/",
    });
    response.cookies.set("_cg_v", String(newCount), {
      httpOnly: true,
      maxAge: 86400 * 7,
      path: "/",
    });

    return response;
  }

  // Increment visit counter
  const response = NextResponse.json({
    status: "tracked",
    visits: newCount,
  });

  response.cookies.set("_cg_v", String(newCount), {
    httpOnly: true,
    maxAge: 86400 * 7, // 7 days
    path: "/",
  });

  return response;
}
