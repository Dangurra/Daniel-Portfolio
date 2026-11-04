// Renders `**bold**` and `[label](url)` markdown-style segments, everything else as plain text.
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-text-primary">
              {part.slice(2, -2)}
            </strong>
          );
        }

        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          const [, label, href] = linkMatch;
          return (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-surface-action underline underline-offset-2 hover:opacity-80"
            >
              {label}
            </a>
          );
        }

        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
