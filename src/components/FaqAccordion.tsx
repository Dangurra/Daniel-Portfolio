"use client";

import { useState } from "react";

export function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-border-section border-y border-border-section">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between py-4 text-left"
              aria-expanded={open}
            >
              <span className="font-sans text-[15px] text-text-primary">{item.question}</span>
              <span className="font-mono text-[14px] text-text-muted">{open ? "−" : "+"}</span>
            </button>
            {open && (
              <p className="pb-4 font-sans text-[14px] leading-[22px] text-text-secondary">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
