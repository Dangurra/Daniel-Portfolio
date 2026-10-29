import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-neutral-200 px-6 py-8 text-sm text-neutral-500 dark:border-neutral-800">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        <span>&copy; {new Date().getFullYear()} {siteConfig.name}</span>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
