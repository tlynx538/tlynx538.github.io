"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Torus from "./Torus";

// Keep one canvas at hero resolution; only its compositor transform changes.
const SIZE = 700;
const transform = ({ x, y, size }) => `translate3d(${x}px, ${y}px, 0) scale(${size / SIZE})`;

export default function TravelingTorus() {
  const pathname = usePathname();
  const home = pathname === "/";
  const host = useRef(null);
  const previousRoute = useRef(pathname);
  const positioned = useRef(false);
  const flight = useRef(null);

  useLayoutEffect(() => {
    const element = host.current;
    const target = document.querySelector(home ? "[data-torus-hero]" : "[data-torus-corner]");
    if (!target) return;
    const stage = home ? target.closest(".hero-stage") : null;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const routeChanged = previousRoute.current !== pathname;
    previousRoute.current = pathname;

    const place = (animate = false) => {
      // Sample the on-screen position before cancelling, including interrupted flights.
      const from = element.getBoundingClientRect();
      const fromOpacity = Number(getComputedStyle(element).opacity);
      flight.current?.cancel();
      flight.current = null;
      const bounds = target.getBoundingClientRect();
      const to = { x: bounds.left, y: bounds.top, size: bounds.width };
      if (stage) {
        const area = stage.getBoundingClientRect();
        const padding = 16;
        // The placeholder can be height-constrained independently of its width.
        // Fit the actual square canvas into both axes, with room for its rotation.
        to.size = Math.max(1, Math.min(bounds.width, bounds.height, area.width - padding * 2, area.height - padding * 2));
        to.x = Math.max(area.left + padding, Math.min(bounds.left + (bounds.width - to.size) / 2, area.right - padding - to.size));
        to.y = Math.max(area.top + padding, Math.min(bounds.top + (bounds.height - to.size) / 2, area.bottom - padding - to.size));
      }
      // Document coordinates let the browser scroll the torus with its anchor.
      // Scrolling must never restart or chase the route-transition spring.
      to.x += window.scrollX;
      to.y += window.scrollY;
      const opacity = home ? Number(getComputedStyle(target).opacity) : 1;
      element.style.transform = transform(to);
      element.style.opacity = opacity;
      element.style.visibility = "visible";

      if (animate && positioned.current && !media.matches) {
        const start = { x: from.left + window.scrollX, y: from.top + window.scrollY, size: from.width };
        const distance = Math.hypot(to.x - start.x, to.y - start.y);
        const frames = Array.from({ length: 61 }, (_, index) => {
          const t = index / 60;
          // A gently damped spring, with a small arc as the torus gathers into the corner.
          const spring = 1 - Math.exp(-10 * t) * (Math.cos(7 * t) + 10 / 7 * Math.sin(7 * t));
          const progress = index === 60 ? 1 : spring;
          const arc = Math.sin(Math.PI * t) * (1 - t) * Math.min(distance * .12, 90);
          return {
            transform: transform({
              x: start.x + (to.x - start.x) * progress,
              y: start.y + (to.y - start.y) * progress - arc,
              size: start.size + (to.size - start.size) * progress,
            }),
            opacity: fromOpacity + (opacity - fromOpacity) * Math.min(progress, 1),
            offset: t,
          };
        });
        const animation = element.animate(frames, { duration: 1050, easing: "linear" });
        flight.current = animation;
        animation.onfinish = () => { if (flight.current === animation) flight.current = null; };
      }
      positioned.current = true;
    };

    place(routeChanged);
    const sync = () => place(Boolean(flight.current));
    // ResizeObserver's initial notification must not cancel a newly started flight.
    const observedSizes = new WeakMap();
    const observer = new ResizeObserver((entries) => {
      let changed = false;
      for (const entry of entries) {
        const size = `${entry.contentRect.width}:${entry.contentRect.height}`;
        if (observedSizes.has(entry.target) && observedSizes.get(entry.target) !== size) changed = true;
        observedSizes.set(entry.target, size);
      }
      if (changed) sync();
    });
    observer.observe(target);
    if (stage) observer.observe(stage);
    window.addEventListener("resize", sync);
    media.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", sync);
      media.removeEventListener("change", sync);
    };
  }, [pathname, home]);

  return <div className="torus-layer">
    <Link target={home ? "_blank" : undefined} rel={home ? "noopener noreferrer" : undefined} ref={host} className={`traveling-torus${home ? " is-home" : " is-corner"}`}
      href={home ? "https://mathworld.wolfram.com/Torus.html" : "/"}
      aria-label={home ? "Learn about the torus on Wolfram MathWorld" : "Vinayak Jaiwant Mooliyil, home"}>
      <Torus />
    </Link>
  </div>;
}
