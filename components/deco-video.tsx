"use client";

import { SVGProps, useRef, useState } from "react";
import poster from "@/assets/video/poster.jpeg";
import { cn } from "@/utils/cn";

export default function DecoVideo(props: SVGProps<SVGSVGElement>) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={520}
      height={351}
      viewBox="0 0 520 351"
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <rect width={520} height={350} y={0.186} fill="#fff" rx={20} />
        <path
          fill="#E11D48"
          d="M21 24.88a4.167 4.167 0 1 1 0-8.334 4.167 4.167 0 0 1 0 8.333Z"
        />
        <path
          fill="#FBBF24"
          d="M36 24.88a4.167 4.167 0 1 1 0-8.334 4.167 4.167 0 0 1 0 8.333Z"
        />
        <path
          fill="#22C55E"
          d="M51 24.88a4.167 4.167 0 1 1 0-8.334 4.167 4.167 0 0 1 0 8.333Z"
        />
        <foreignObject width={510} height={304} x={5} y={42}>
          <video
            ref={videoRef}
            className="size-full cursor-pointer rounded-b-[16px] object-cover"
            onClick={() => {
              setPlaying(!playing);
              if (videoRef.current) {
                if (playing && !videoRef.current.paused) {
                  videoRef.current.pause();
                } else {
                  videoRef.current.play();
                }
              }
            }}
            muted
            poster={poster.src}
            preload="none"
          >
            <source src="/promo.mp4" type="video/mp4" />
          </video>
        </foreignObject>
        <g
          filter="url(#b)"
          className={cn(
            "pointer-events-none origin-center scale-150 opacity-100 transition-all sm:scale-100",
            playing && "scale-110 opacity-0",
          )}
        >
          <path
            fill="url(#c)"
            d="M0 41.185h520v309H0z"
            shapeRendering="crispEdges"
          />
          <rect
            width={144}
            height={144}
            x={188}
            y={123.686}
            fill="#121619"
            fillOpacity={0.75}
            rx={72}
          />
          <path
            fill="#fff"
            d="M287.28 197.778a3.908 3.908 0 0 0-.147-4.409 3.896 3.896 0 0 0-1.149-1.043l-39.688-24.128a4.12 4.12 0 0 0-2.14-.596c-2.24 0-4.052 1.772-4.052 3.96v48.244c0 .74.212 1.464.612 2.092 1.184 1.856 3.68 2.424 5.58 1.268l39.688-24.124c.524-.32.972-.756 1.3-1.268l-.004.004Zm2.984 7.988L250.58 229.89c-5.7 3.468-13.2 1.76-16.744-3.804a11.679 11.679 0 0 1-1.836-6.28v-48.24c0-6.564 5.44-11.88 12.16-11.88 2.268 0 4.492.62 6.42 1.792l39.684 24.128c5.7 3.464 7.448 10.784 3.9 16.352a12.028 12.028 0 0 1-3.9 3.808Z"
          />
        </g>
      </g>
      <rect
        width={515}
        height={345}
        x={2.5}
        y={2.686}
        stroke="#fff"
        strokeWidth={5}
        rx={17.5}
      />
      <defs>
        <clipPath id="a">
          <rect width={520} height={350} y={0.186} fill="#fff" rx={20} />
        </clipPath>
        <pattern
          id="c"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use
            xlinkHref="#image0_11514_4479"
            transform="matrix(.00056 0 0 .00095 -.028 0)"
          />
        </pattern>

        <filter
          id="b"
          width={596}
          height={387}
          x={-38}
          y={26.186}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={7.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_11514_4479"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            radius={12}
            result="effect2_dropShadow_11514_4479"
          />
          <feOffset dy={25} />
          <feGaussianBlur stdDeviation={25} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="effect1_dropShadow_11514_4479"
            result="effect2_dropShadow_11514_4479"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_11514_4479"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
