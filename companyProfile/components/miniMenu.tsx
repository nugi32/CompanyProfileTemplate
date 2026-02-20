"use client";
import { ModeToggle } from "@/components/mode";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MiniMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [scrollTarget] = useState<string | null>(null);

  useEffect(() => {
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      
      }
    }
  }, [pathname, scrollTarget]);

const handleScrollOrNavigate = (id: string) => {
  onClose(); // tutup menu
  if (pathname !== "/") {
    // Tambahkan query target
    router.push(`/?scrollTo=${id}`);
  } else {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const handleScroll = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};



  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 md:hidden"
        onClick={() => onClose()}
      />

      {/* Menu */}
      <div
        className="fixed top-17 right-1 z-[60] w-32
          bg-background border border-border
          rounded-2xl shadow-lg
          md:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="flex flex-col gap-4 px-6 py-4">
          <Link
            href="/"
            className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary
            after:absolute after:-bottom-1 after:left-0
            after:h-[2px] after:w-full
            after:origin-left after:scale-x-0
            after:bg-primary after:transition-transform after:duration-300
            hover:after:scale-x-100"
          >
            Home
          </Link>

          <a
            onClick={() => handleScrollOrNavigate("ABOUT")}
            className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary
            after:absolute after:-bottom-1 after:left-0
            after:h-[2px] after:w-full
            after:origin-left after:scale-x-0
            after:bg-primary after:transition-transform after:duration-300
            hover:after:scale-x-100"
          >
            About Us
          </a>

          <Link
            href="/services"
            className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary
            after:absolute after:-bottom-1 after:left-0
            after:h-[2px] after:w-full
            after:origin-left after:scale-x-0
            after:bg-primary after:transition-transform after:duration-300
            hover:after:scale-x-100"
          >
            Product & Services
          </Link>

          <a
            onClick={() => handleScroll("FOOTER")}
            className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary
            after:absolute after:-bottom-1 after:left-0
            after:h-[2px] after:w-full
            after:origin-left after:scale-x-0
            after:bg-primary after:transition-transform after:duration-300
            hover:after:scale-x-100"
          >
            Contact Us
          </a>

          <ModeToggle />
        </nav>
      </div>
    </>
  );
}
