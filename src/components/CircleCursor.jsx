"use client";

import { useEffect, useRef } from "react";

const COMPONENTS = "a, button, input, textarea, select, label, summary, [role='button'], [data-cursor], h1, h2, h3, p, li, dt, dd, img, svg, canvas, .hero-meta span, .project-row, .timeline-row, .skills-list, .detail-mark";

export default function CircleCursor() {
  const cursor = useRef(null);

  useEffect(() => {
    const element = cursor.current;
    const media = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    let x = 0;
    let y = 0;
    let visible = false;

    const hide = () => {
      visible = false;
      cancelAnimationFrame(frame);
      frame = 0;
      element.classList.remove("is-visible", "is-hovering");
      document.documentElement.removeAttribute("data-circle-cursor");
    };
    const paint = () => {
      frame = 0;
      if (!visible || !media.matches) return;
      const target = document.elementFromPoint(x, y);
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      element.classList.toggle("is-hovering", Boolean(target?.closest(COMPONENTS)));
      element.classList.add("is-visible");
      document.documentElement.setAttribute("data-circle-cursor", "");
    };
    const schedule = () => {
      if (!frame && visible) frame = requestAnimationFrame(paint);
    };
    const move = (event) => {
      if (!media.matches || event.pointerType !== "mouse") { hide(); return; }
      x = event.clientX;
      y = event.clientY;
      visible = true;
      schedule();
    };
    const onKey = (event) => { if (event.key === "Tab") hide(); };
    const onVisibility = () => { if (document.hidden) hide(); };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("blur", hide);
    window.addEventListener("keydown", onKey);
    document.documentElement.addEventListener("pointerleave", hide);
    document.addEventListener("visibilitychange", onVisibility);
    media.addEventListener("change", hide);
    return () => {
      hide();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("blur", hide);
      window.removeEventListener("keydown", onKey);
      document.documentElement.removeEventListener("pointerleave", hide);
      document.removeEventListener("visibilitychange", onVisibility);
      media.removeEventListener("change", hide);
    };
  }, []);

  return <div ref={cursor} className="circle-cursor" aria-hidden="true"><span /></div>;
}
