"use client";

import { useState } from "react";
import Image from "next/image";

type ColorSwatch = { ral: string; src: string };
type ColorGroup = { name: string; swatches: ColorSwatch[] };

const tabA: ColorGroup[] = [
  {
    name: "Tigla metalica clasic lucioasa",
    swatches: [
      { ral: "Ral 8017", src: "/images/colors/lucios-8017.webp" },
      { ral: "RAL 3011", src: "/images/colors/lucios-3011.webp" },
      { ral: "RAL 3009", src: "/images/colors/lucios-3009.webp" },
      { ral: "Ral 7024", src: "/images/colors/lucios-7024.webp" },
      { ral: "RAL 8004", src: "/images/colors/lucios-8004.webp" },
    ],
  },
  {
    name: "Tigla metalica mat clasic",
    swatches: [
      { ral: "Ral 8017", src: "/images/colors/mat-8017.webp" },
      { ral: "RAL 3009", src: "/images/colors/mat-3009.webp" },
      { ral: "Ral 7024", src: "/images/colors/mat-7024.webp" },
      { ral: "RAL 8004", src: "/images/colors/mat-8004.webp" },
    ],
  },
  {
    name: "Tigla metalica grande mat",
    swatches: [
      { ral: "Ral 8017", src: "/images/colors/grandemat-8017.webp" },
      { ral: "RAL 3011", src: "/images/colors/grandemat-3011.webp" },
      { ral: "Ral 7024", src: "/images/colors/grandemat-7024.webp" },
      { ral: "RAL 8004", src: "/images/colors/grandemat-8004.webp" },
    ],
  },
  {
    name: "Tigla metalica grande mat balcanic",
    swatches: [
      { ral: "Ral 8017", src: "/images/colors/grandemat-8017.webp" },
      { ral: "RAL 3011", src: "/images/colors/grandemat-3011.webp" },
      { ral: "Ral 7024", src: "/images/colors/grandemat-7024.webp" },
      { ral: "RAL 8004", src: "/images/colors/grandemat-8004.webp" },
    ],
  },
  {
    name: "Tigla metalica balcanic lucios",
    swatches: [
      { ral: "Ral 8017", src: "/images/colors/lucios-8017.webp" },
      { ral: "RAL 3011", src: "/images/colors/lucios-3011.webp" },
      { ral: "RAL 3009", src: "/images/colors/lucios-3009.webp" },
      { ral: "Ral 7024", src: "/images/colors/lucios-7024.webp" },
      { ral: "RAL 8004", src: "/images/colors/lucios-8004.webp" },
    ],
  },
  {
    name: "Tigla metalica gerard",
    swatches: [
      { ral: "Ral 8017", src: "/images/colors/gerard-8017.png" },
      { ral: "RAL 3011", src: "/images/colors/gerard-3011.webp" },
      { ral: "RAL 3009", src: "/images/colors/gerard-3009.webp" },
      { ral: "Ral 7024", src: "/images/colors/gerard-7024.png" },
      { ral: "RAL 8004", src: "/images/colors/gerard-8004.png" },
    ],
  },
];

const tabB: ColorGroup[] = [
  {
    name: "Tigla ceramica Tondach",
    swatches: [
      { ral: "", src: "/images/colors/tondach.webp" },
    ],
  },
  {
    name: "Tigla de beton",
    swatches: [
      { ral: "", src: "/images/colors/beton.webp" },
    ],
  },
  {
    name: "Tigla ceramica tip solzi",
    swatches: [
      { ral: "Ral 7024", src: "/images/colors/solzi-7024.webp" },
    ],
  },
];

const tabC: ColorGroup[] = [
  {
    name: "Tabla faltuita dublu faltuita",
    swatches: [
      { ral: "Ral 7024", src: "/images/colors/solzi-7024.webp" },
    ],
  },
];

const allTabs = [
  { id: "A", label: "Tigla metalica lucioasa", groups: tabA },
  { id: "B", label: "Tigla ceramica", groups: tabB },
  { id: "C", label: "Tabla faltuita tip click", groups: tabC },
];

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="text-[#B91C1C] shrink-0">
      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
    </svg>
  );
}

export default function MaterialColors() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-[#B91C1C] font-semibold text-sm uppercase tracking-wider mb-2 block">
            Reparatii Pro
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#051D3E] mb-8">
            Paletar culori
          </h2>

          {/* Tabs A / B / C */}
          <div className="inline-flex rounded-lg overflow-hidden border border-gray-200">
            {allTabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`px-5 sm:px-8 py-3 text-sm font-semibold transition-all border-r last:border-r-0 border-gray-200 ${
                  activeTab === i
                    ? "bg-accent text-white"
                    : "bg-[#f4f4f4] text-[#212121] hover:bg-gray-200"
                }`}
              >
                {tab.id}. {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Color groups for active tab */}
        <div className="space-y-0">
          {allTabs[activeTab].groups.map((group, gi) => (
            <div key={group.name}>
              {/* Group title with check icon */}
              <div className="flex items-center gap-2 py-4">
                <CheckIcon />
                <span className="font-semibold text-[#212121] text-sm">{group.name}</span>
              </div>

              {/* Swatches grid */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4 pb-4">
                {group.swatches.map((swatch, si) => (
                  <div key={si} className="text-center">
                    <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm border border-gray-100 mb-1.5">
                      <Image
                        src={swatch.src}
                        alt={swatch.ral || group.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 30vw, 18vw"
                      />
                    </div>
                    {swatch.ral && (
                      <span className="text-xs text-[#555555] font-medium">{swatch.ral}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Divider between groups */}
              {gi < allTabs[activeTab].groups.length - 1 && (
                <hr className="border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
