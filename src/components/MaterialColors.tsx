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
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="text-[#0d1547] shrink-0">
      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
    </svg>
  );
}

export default function MaterialColors() {
  const [activeTab, setActiveTab] = useState(0);
  const [openGroup, setOpenGroup] = useState<number | null>(0);

  const handleTabChange = (i: number) => {
    setActiveTab(i);
    setOpenGroup(0);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider mb-2 block">
            Reparatii Pro
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#051D3E] mb-8">
            Paletar culori
          </h2>

          {/* Tabs */}
          <div className="inline-flex rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            {allTabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(i)}
                className={`px-5 sm:px-8 py-3 text-sm font-semibold transition-all border-r last:border-r-0 border-gray-200 ${
                  activeTab === i
                    ? "bg-[#0d1547] text-white"
                    : "bg-white text-[#212121] hover:bg-gray-50"
                }`}
              >
                {tab.id}. {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {allTabs[activeTab].groups.map((group, gi) => {
            const isOpen = openGroup === gi;
            return (
              <div key={group.name} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenGroup(isOpen ? null : gi)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="font-semibold text-[#212121] text-sm">{group.name}</span>
                    <span className="text-xs text-gray-400 font-normal">{group.swatches.length} culori</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18" height="18"
                    viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 border-t border-gray-100">
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 pt-4">
                      {group.swatches.map((swatch, si) => (
                        <div key={si} className="text-center">
                          <div className="relative aspect-square rounded-xl overflow-hidden border border-gray-200 mb-2">
                            <Image
                              src={swatch.src}
                              alt={swatch.ral || group.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 30vw, 18vw"
                            />
                          </div>
                          {swatch.ral && (
                            <span className="text-xs text-gray-500 font-medium">{swatch.ral}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
