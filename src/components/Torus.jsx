"use client";

import { useEffect, useRef, useState } from "react";

const TAU = Math.PI * 2;
// The persistent torus keeps its clock and pointer response across navigation.
const pointer = { x: 0, y: 0 };
const rotation = { x: .15, z: 0, lastSample: 0 };
const sampleRotation = (now) => {
  const elapsed = Math.min(now - rotation.lastSample, 50);
  rotation.lastSample = now;
  const smoothing = 1 - Math.pow(.975, elapsed / (1000 / 60));
  rotation.x += (.15 + pointer.y * .13 - rotation.x) * smoothing;
  rotation.z += (pointer.x * .16 - rotation.z) * smoothing;
  return [rotation.x, (now * .000102) % TAU, rotation.z];
};
const fallbackPoint = (u, v) => {
  const radius = 1.4 + .58 * Math.cos(v);
  return `${(200 + radius * Math.cos(u) * 84).toFixed(1)},${(200 + (radius * Math.sin(u) * .88 + .58 * Math.sin(v) * .25) * 84).toFixed(1)}`;
};
const fallbackFibers = Array.from({ length: 40 }, (_, fiber) => {
  const v = fiber / 40 * TAU;
  return `M${Array.from({ length: 97 }, (_, step) => fallbackPoint(step / 96 * TAU, v)).join("L")}Z`;
});
const fallbackRings = Array.from({ length: 13 }, (_, ring) => {
  const u = ring / 13 * TAU;
  return `M${Array.from({ length: 49 }, (_, step) => fallbackPoint(u, step / 48 * TAU)).join("L")}Z`;
});

export default function Torus({ compact = false, href }) {
  const host = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = host.current;
    const stage = element.parentElement;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    let visible = false;
    let frame = 0;
    let renderer;
    let geometry;
    let material;
    let observer;
    let resizeObserver;
    let webglFailed = false;
    let busy = false;
    let scene;
    let camera;
    let group;
    let fibers = [];
    let colorAttribute;
    let lastLight = 0;
    let lastRender = 0;
    const onPointer = (event) => {
      const bounds = element.getBoundingClientRect();
      pointer.x = (event.clientX - bounds.left) / bounds.width - .5;
      pointer.y = (event.clientY - bounds.top) / bounds.height - .5;
    };
    const onLeave = () => { pointer.x = 0; pointer.y = 0; };
    const onLost = (event) => {
      event.preventDefault();
      webglFailed = true;
      cancelAnimationFrame(frame);
      setActive(false);
    };
    const resize = () => {
      if (!renderer || !camera) return;
      // Use layout dimensions so a scaled corner torus keeps hero-quality pixels.
      const width = element.clientWidth;
      const height = element.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const tick = () => {
      if (disposed || !visible || document.hidden || media.matches || webglFailed || !renderer) return;
      const now = performance.now();
      if (now - lastRender < 1000 / 30) {
        frame = requestAnimationFrame(tick);
        return;
      }
      lastRender = now;
      if (colorAttribute && now - lastLight >= 55) {
        const values = colorAttribute.array;
        const seconds = now * .001;
        for (let fiber = 0; fiber < fibers.length; fiber++) {
          const { start, count, hue } = fibers[fiber];
          const slow = Math.sin(seconds * .53 + fiber * 7.37);
          const drift = Math.sin(seconds * .31 + fiber * 11.83);
          const intensity = .79 + .13 * slow * slow + .08 * drift * drift;
          for (let vertex = start; vertex < start + count; vertex++) {
            const index = vertex * 3;
            values[index] = hue[0] * intensity;
            values[index + 1] = hue[1] * intensity;
            values[index + 2] = hue[2] * intensity;
          }
        }
        colorAttribute.needsUpdate = true;
        lastLight = now;
      }
      group.rotation.set(...sampleRotation(now));
      renderer.render(scene, camera);
      frame = requestAnimationFrame(tick);
    };
    const start = async () => {
      if (!visible || document.hidden || media.matches || disposed || webglFailed || busy) return;
      if (renderer) { cancelAnimationFrame(frame); tick(); setActive(true); return; }
      busy = true;
      try {
        const THREE = await import("three");
        if (disposed || media.matches || !visible) return;
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
        renderer.setClearColor(0x000000, 0);
        renderer.domElement.addEventListener("webglcontextlost", onLost, false);
        element.appendChild(renderer.domElement);
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(42, 1, .1, 100);
        camera.position.z = 6.3;
        group = new THREE.Group();
        scene.add(group);
        const positions = [];
        const colors = [];
        // Independent, thin fiber paths across the torus. Seeded phase jitter keeps geometry stable.
        const addFiber = (points, hue, animated = false) => {
          const start = colors.length / 3;
          for (let i = 0; i < points.length - 1; i++) {
            for (const point of [points[i], points[i + 1]]) {
              positions.push(...point);
              colors.push(...hue);
            }
          }
          if (animated) fibers.push({ start, count: colors.length / 3 - start, hue });
        };
        const point = (u, v) => {
          const r = 1.4 + .58 * Math.cos(v);
          return [r * Math.cos(u), r * Math.sin(u), .58 * Math.sin(v)];
        };
        for (let fiber = 0; fiber < 56; fiber++) {
          const v = fiber / 56 * Math.PI * 2;
          const brightness = .65 + .35 * Math.sin(fiber * 13.37) ** 2;
          const hue = [(.09 + .07 * Math.sin(fiber * 3.1) ** 2) * brightness, (.46 + .25 * Math.sin(fiber * 4.1) ** 2) * brightness, brightness];
          const points = [];
          for (let step = 0; step <= 128; step++) points.push(point(step / 128 * Math.PI * 2, v + .008 * Math.sin(step * .21 + fiber)));
          addFiber(points, hue, true);
        }
        for (let ring = 0; ring < 17; ring++) {
          const u = ring / 17 * Math.PI * 2;
          const points = [];
          for (let step = 0; step <= 44; step++) points.push(point(u, step / 44 * Math.PI * 2));
          addFiber(points, [.09, .35, .54]);
        }
        geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
        colorAttribute = new THREE.Float32BufferAttribute(colors, 3);
        colorAttribute.setUsage(THREE.DynamicDrawUsage);
        geometry.setAttribute("color", colorAttribute);
        material = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: .65, depthWrite: false });
        group.add(new THREE.LineSegments(geometry, material));
        resize();
        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(element);
        tick();
        setActive(true);
      } catch {
        webglFailed = true;
        setActive(false);
        resizeObserver?.disconnect();
        if (renderer) {
          renderer.domElement.removeEventListener("webglcontextlost", onLost);
          renderer.dispose();
          renderer.domElement.remove();
          renderer = undefined;
        }
        geometry?.dispose();
        material?.dispose();
      } finally {
        busy = false;
      }
    };
    const onMedia = () => {
      if (media.matches) { cancelAnimationFrame(frame); setActive(false); }
      else start();
    };
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(frame);
      else start();
    };
    observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else cancelAnimationFrame(frame);
    });
    observer.observe(element);
    media.addEventListener("change", onMedia);
    document.addEventListener("visibilitychange", onVisibility);
    if (!compact) {
      stage.addEventListener("pointermove", onPointer);
      stage.addEventListener("pointerleave", onLeave);
    }
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      media.removeEventListener("change", onMedia);
      document.removeEventListener("visibilitychange", onVisibility);
      if (!compact) {
        stage.removeEventListener("pointermove", onPointer);
        stage.removeEventListener("pointerleave", onLeave);
        onLeave();
      }
      resizeObserver?.disconnect();
      if (renderer) {
        renderer.domElement.removeEventListener("webglcontextlost", onLost);
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      }
      geometry?.dispose();
      material?.dispose();
    };
  }, [compact]);

  const Host = href ? "a" : "div";
  return <Host ref={host} href={href} target={href ? "_blank" : undefined} rel={href ? "noopener noreferrer" : undefined} className={`hero-torus${compact ? " torus-compact" : ""}${active ? " is-active" : ""}`} aria-hidden={href ? undefined : true} aria-label={href ? "Learn about the torus on Wolfram MathWorld" : undefined}><svg aria-hidden="true" className="torus-fallback" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth=".75">{fallbackFibers.map((path, index) => <path key={`fiber-${index}`} d={path} strokeOpacity={(.38 + .24 * Math.sin(index * 4.1) ** 2).toFixed(3)}/>)}{fallbackRings.map((path, index) => <path key={`ring-${index}`} d={path} strokeOpacity=".25"/>)}</svg></Host>;
}
