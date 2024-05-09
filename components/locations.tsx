"use client";

import Image from "next/image";
import { MouseEventHandler, SVGProps, useRef, useState } from "react";

import map from "@/assets/images/map.png";
import mapMobile from "@/assets/images/map-mobile.png";
import sneakers from "@/assets/images/sneakers.jpeg";
import { cn } from "@/utils/cn";

export default function Locations() {
  const [hovered, setHovered] = useState(false);
  const [popoverPos, setPopoverPos] = useState({ x: 0, y: 0 });

  const handleMouseOver: MouseEventHandler<SVGCircleElement> = (event) => {
    const rect = (event.target as Element).getBoundingClientRect();
    const circleWidth = parseInt(
      (event.target as Element).getAttribute("r") || "0",
    );

    setPopoverPos({
      x: rect.x + window.scrollX + circleWidth,
      y: rect.y + window.scrollY + circleWidth,
    });
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const circleProps: SVGProps<SVGCircleElement> = {
    className:
      "pointer-event-auto animate-pulse cursor-pointer hover:fill-[#D9F99D]",
    onMouseOver: handleMouseOver,
    onMouseLeave: handleMouseLeave,
  };

  return (
    <div className="mx-auto max-w-screen-2xl px-0 py-12 sm:px-12 lg:px-20 lg:py-20">
      <div
        style={{ left: popoverPos.x, top: popoverPos.y }}
        className={cn(
          "pointer-events-none absolute z-20 w-64 origin-bottom -translate-x-1/2 -translate-y-full scale-100 opacity-100 transition-transform",
          !hovered && "scale-90 opacity-0",
        )}
      >
        <Image
          src={sneakers}
          alt="Sneakers"
          height={200}
          width={256}
          className="relative z-10 h-[200px] w-64 rounded-[10px] border-[5px] border-white object-cover shadow-sneaker-card"
        />
        <div className="relative z-0 mx-auto w-[242px] -translate-y-2 rounded-[5px] bg-[#E2E8F0] p-4 pb-2 text-sm shadow-sneaker-card before:absolute before:-bottom-1.5 before:left-0 before:right-0 before:mx-auto before:size-3 before:rotate-45 before:bg-[#E2E8F0] before:content-['']">
          <p>Emma Simpson collected one pair of Cool Shoes.</p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute flex size-full items-center justify-center sm:z-0">
          <p className="flex flex-col items-center justify-center gap-y-2 font-extrabold text-white">
            <span className="text-5xl drop-shadow sm:text-8xl">11,658,467</span>
            <span className="text-3xl drop-shadow sm:text-6xl">
              Shoes Collected
            </span>
          </p>
        </div>
        <Image
          src={mapMobile}
          alt="World map"
          className="mx-auto block w-full sm:hidden"
          quality={100}
          priority
        />
        <Image
          src={map}
          alt="World map"
          className="mx-auto hidden sm:block"
          quality={100}
          priority
        />
        <svg
          className="absolute left-0 right-0 top-0 mx-auto hidden h-full w-auto sm:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1049 633"
          width={1049}
          height={633}
          fill="rgba(0,0,0,0)"
        >
          <circle
            {...circleProps}
            cx={922}
            cy={500}
            r={10.5}
            stroke="#A3E635"
            strokeWidth={3}
          />
          <circle
            {...circleProps}
            cx={797}
            cy={351}
            r={10.5}
            stroke="#A3E635"
            strokeWidth={3}
          />
          <circle
            {...circleProps}
            cx={421}
            cy={75}
            r={6.5}
            stroke="#A3E635"
            strokeWidth={3}
          />
          <circle
            {...circleProps}
            cx={894}
            cy={337}
            r={6.5}
            stroke="#A3E635"
            strokeWidth={3}
          />
          <circle
            {...circleProps}
            cx={596.5}
            cy={444.5}
            r={11}
            stroke="#A3E635"
            strokeWidth={3}
          />
          <circle
            {...circleProps}
            cx={343}
            cy={183}
            r={13.5}
            stroke="#A3E635"
            strokeWidth={3}
          />
          <circle
            {...circleProps}
            cx={379}
            cy={476}
            r={6.5}
            stroke="#A3E635"
            strokeWidth={3}
          />
          <circle
            {...circleProps}
            cx={336}
            cy={510}
            r={10.5}
            stroke="#A3E635"
            strokeWidth={3}
          />
          <circle
            {...circleProps}
            cx={222}
            cy={310}
            r={10.5}
            stroke="#A3E635"
            strokeWidth={3}
          />
        </svg>
      </div>
    </div>
  );
}
