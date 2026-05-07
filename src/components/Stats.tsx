"use client";

import { useEffect, useRef, useState } from "react";
import { Home, Users, Award, ShieldCheck } from "lucide-react";

const stats = [
  { value: 300, suffix: "+", label: "Acoperisuri Finalizate", icon: Home },
  { value: 250, suffix: "+", label: "Clienti Multumiti", icon: Users },
  { value: 15, suffix: "+", label: "Ani Experienta", icon: Award },
  { value: 100, suffix: "%", label: "Garantie Lucrari", icon: ShieldCheck },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="lg:hidden py-10 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col items-center text-center shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                  <Icon size={20} className="text-[#0d1547]" />
                </div>
                <div className="text-3xl font-bold text-[#051D3E] mb-1">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-gray-500 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
