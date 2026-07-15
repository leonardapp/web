"use client";

import Marquee from "react-fast-marquee";

const logos = [
  { name: "lejza", file: "lejza.svg" },
  { name: "dejavu", file: "dejavu.svg" },
  { name: "tomos", file: "tomos.svg" },
  { name: "heavyhit", file: "heavyhit.svg" },
  { name: "cheese", file: "cheese.svg" },
  { name: "pasa", file: "pasa.svg" },
  { name: "proper", file: "proper.png" },
];

export default function LogoMarquee() {
  return (
    <div className="mt-10">
  <Marquee
    speed={28}
    gradient={false}
    pauseOnHover
    autoFill
  >
        {logos.map((logo) => (
  <img
    key={logo.name}
    src={`https://hoxxes.app/images/${logo.file}`}
    alt={logo.name}
    className="h-10 md:h-12 lg:h-12 w-auto object-contain mx-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
  />
))}
      </Marquee>
    </div>
  );
}