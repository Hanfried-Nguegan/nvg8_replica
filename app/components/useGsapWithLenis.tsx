"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function useGsapWithLenis() {
  useEffect(() => {
    if (!window.lenis) return;

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (value !== undefined) {
          window.lenis?.scrollTo(value);
        } else {
          return window.lenis?.scroll ?? window.scrollY;
        }
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    window.lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    ScrollTrigger.refresh();
  }, []);
}
