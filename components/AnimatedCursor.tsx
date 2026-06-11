"use client";

import { useEffect } from "react";

export default function AnimatedCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "fixed w-6 h-6 rounded-full border-2 border-cyan-400 pointer-events-none z-50 opacity-0 transition-opacity duration-150";
    cursor.style.mixBlendMode = "difference";
    document.body.appendChild(cursor);

    const smallCursor = document.createElement("div");
    smallCursor.className = "fixed w-1 h-1 rounded-full bg-fuchsia-500 pointer-events-none z-50";
    document.body.appendChild(smallCursor);

    let timeout: number;

    const move = (e: MouseEvent) => {
      smallCursor.style.left = e.clientX + "px";
      smallCursor.style.top = e.clientY + "px";

      cursor.style.left = e.clientX - 12 + "px";
      cursor.style.top = e.clientY - 12 + "px";
      cursor.style.opacity = "1";

      clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        cursor.style.opacity = "0";
      }, 2000);
    };

    const click = () => {
      cursor.style.transform = "scale(0.5)";
      setTimeout(() => cursor.style.transform = "scale(1)", 150);
    };

    const show = () => (cursor.style.opacity = "1");
    const hide = () => (cursor.style.opacity = "0");

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", click);
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);

    return () => {
      document.body.removeChild(cursor);
      document.body.removeChild(smallCursor);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", click);
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  return null;
}
