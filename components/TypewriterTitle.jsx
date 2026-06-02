"use client";

import { useEffect, useState } from "react";

const title = "Full-stack builder focused on real-time systems and backend engineering.";
const highlight = "real-time systems";
const highlightStart = title.indexOf(highlight);
const highlightEnd = highlightStart + highlight.length;

export default function TypewriterTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const startedAt = performance.now();
    const charsPerSecond = 34;

    const tick = (now) => {
      const nextCount = Math.min(title.length, Math.floor(((now - startedAt) / 1000) * charsPerSecond));
      setCount(nextCount);

      if (nextCount < title.length) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, []);

  const typed = title.slice(0, count);
  const beforeHighlight = typed.slice(0, Math.min(typed.length, highlightStart));
  const highlighted = typed.slice(highlightStart, Math.min(typed.length, highlightEnd));
  const afterHighlight = typed.slice(highlightEnd);

  return (
    <h1 className="typewriter-title" aria-label={title}>
      {beforeHighlight}
      {highlighted ? <span className="typewriter-accent">{highlighted}</span> : null}
      {afterHighlight}
      <span className="typewriter-caret" aria-hidden="true" />
    </h1>
  );
}
