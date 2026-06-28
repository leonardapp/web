"use client";

import Marquee from "react-fast-marquee";

const logos = [
  "lejza",
  "dejavu",
  "tomos",
  "heavyhit",
  "cheese",
  "pasa",
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
            key={logo}
            src={`https://hoxxes.app/images/${logo}.svg`}
            alt={logo}
            className="h-10 md:h-12 lg:h-12 w-auto object-contain mx-10 opacity-70 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </Marquee>
    </div>
  );
}