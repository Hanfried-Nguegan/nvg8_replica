"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useGsapWithLenis }from "./useGsapWithLenis";

export function GsapTest() {
  const boxRef = useRef<HTMLDivElement>(null);

  // Connect GSAP and Lenis systems
  useGsapWithLenis();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(boxRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="min-h-[200vh] p-20">
      <div
        ref={boxRef}
        className="h-40 bg-accent text-black flex items-center justify-center rounded-lg text-2xl"
      >
        GSAP + ScrollTrigger + Lenis ✔
      </div>
    </div>
  );
}
