"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

function FaqRow({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLParagraphElement>(null);
  const plusRef = useRef<HTMLSpanElement>(null);
  const mounted = useRef(false);

  useGSAP(
    () => {
      const body = bodyRef.current;
      const inner = innerRef.current;
      if (!body || !inner) return;

      if (!mounted.current) {
        mounted.current = true;
        gsap.set(body, { height: open ? inner.offsetHeight : 0 });
        gsap.set(inner, { opacity: open ? 1 : 0 });
        gsap.set(plusRef.current, { rotate: open ? 45 : 0 });
        return;
      }

      gsap.to(body, {
        height: open ? inner.offsetHeight : 0,
        duration: 0.45,
        ease: "power3.inOut",
      });
      gsap.to(inner, {
        opacity: open ? 1 : 0,
        duration: open ? 0.4 : 0.2,
        delay: open ? 0.1 : 0,
        ease: "power2.out",
      });
      gsap.to(plusRef.current, {
        rotate: open ? 45 : 0,
        duration: 0.35,
        ease: "back.out(2)",
      });
    },
    { dependencies: [open] }
  );

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-[15px] text-text-primary">{question}</span>
        <span ref={plusRef} className="inline-flex font-mono text-[16px] text-text-muted">
          +
        </span>
      </button>
      <div ref={bodyRef} className="overflow-hidden">
        <p
          ref={innerRef}
          className="pb-4 font-sans text-[14px] leading-[22px] text-text-secondary"
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-border-section border-y border-border-section">
      {items.map((item, i) => (
        <FaqRow
          key={item.question}
          question={item.question}
          answer={item.answer}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
