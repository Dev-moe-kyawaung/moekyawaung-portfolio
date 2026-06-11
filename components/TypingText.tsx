"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TypingText({ items }: { items: string[] }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = items[idx];
    const speed = deleting ? 30 : 80;
    const pause = deleting ? 0 : target.length === text.length ? 1200 : 0;

    const t = window.setTimeout(() => {
      if (!deleting && text === target) {
        setDeleting(true);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => (i + 1) % items.length);
        return;
      }
      setText(deleting ? target.slice(0, text.length - 1) : target.slice(0, text.length + 1));
    }, speed + pause);

    return () => window.clearTimeout(t);
  }, [text, deleting, idx, items]);

  return (
    <div className="inline-flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-0.5 h-6 bg-cyan-400 ml-1"
          />
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
