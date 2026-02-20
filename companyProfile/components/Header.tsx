"use client";

import { ModeToggle } from "@/components/mode";
import { Menu, X } from "lucide-react";
import MiniMenu from "./miniMenu";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface HeaderProps {
  logo: string | null;
}

export default function Header({ logo }: HeaderProps) {

const [isOpen, setIsOpen] = useState(false);

const handleScroll = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

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
  if (pathname !== "/") {
    // Tambahkan query target
    router.push(`/?scrollTo=${id}`);
  } else {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          
          {/* Logo kiri */}
<div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
  {logo && (
    <Image
      src={logo}
      alt="Logo"
      width={40}
      height={40}
      className="object-cover w-full h-full"
    />
  )}
</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
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
            <button className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary
              after:absolute after:-bottom-1 after:left-0
              after:h-[2px] after:w-full
              after:origin-left after:scale-x-0
              after:bg-primary after:transition-transform after:duration-300
              hover:after:scale-x-100" onClick={() => handleScrollOrNavigate('ABOUT')}>
                About Us
              </button>
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
            <button className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary
              after:absolute after:-bottom-1 after:left-0
              after:h-[2px] after:w-full
              after:origin-left after:scale-x-0
              after:bg-primary after:transition-transform after:duration-300
              hover:after:scale-x-100" onClick={() => handleScroll('FOOTER')}>
                Contact Us
              </button>

          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Switch hanya tampil di desktop */}
            <div className="hidden md:flex">
              <ModeToggle />
            </div>

            {/* Mobile toggle button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isOpen && (
        <MiniMenu 
          isOpen={isOpen}
          onClose={() => setIsOpen(false)} 
        />
      )}
    </>
  );
}
