import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-full w-full flex-col">
      <Header />
      <main className="mx-auto flex w-full max-w-[1512px] flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
