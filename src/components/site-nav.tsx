"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "./theme-toggle";

type NavLink =
  | { label: string; type: "anchor"; id: string }
  | { label: string; type: "route"; href: string };

const navLinks: NavLink[] = [
  { label: "Projects", type: "anchor", id: "projects" },
  { label: "Writing", type: "route", href: "/writing" },
  { label: "About", type: "anchor", id: "about" },
  { label: "Stack", type: "anchor", id: "stack" },
  { label: "Contact", type: "anchor", id: "contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sections = navLinks
      .filter((link): link is Extract<NavLink, { type: "anchor" }> =>
        link.type === "anchor",
      )
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const linkClass = (active: boolean) =>
    `font-mono text-sm uppercase tracking-wide transition-colors ${
      active ? "text-accent-coral" : "text-ink/70 hover:text-ink"
    }`;

  const mobileLinkClass = (active: boolean) =>
    `rounded-lg px-3 py-3 text-left font-mono text-sm uppercase tracking-wide ${
      active ? "text-accent-coral" : "text-ink/70"
    }`;

  const renderLink = (link: NavLink, mobile: boolean) => {
    const className = mobile
      ? mobileLinkClass
      : linkClass;

    if (link.type === "route") {
      return (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setIsMenuOpen(false)}
          className={className(pathname.startsWith(link.href))}
        >
          {link.label}
        </Link>
      );
    }

    if (isHome) {
      return (
        <button
          key={link.id}
          type="button"
          onClick={() => scrollToSection(link.id)}
          className={className(activeId === link.id)}
        >
          {link.label}
        </button>
      );
    }

    return (
      <Link
        key={link.id}
        href={`/#${link.id}`}
        onClick={() => setIsMenuOpen(false)}
        className={className(false)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        isScrolled || isMenuOpen
          ? "border-b-2 border-ink bg-surface"
          : "border-b-2 border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {isHome ? (
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="font-heading text-xl font-bold"
          >
            NP.
          </button>
        ) : (
          <Link href="/" className="font-heading text-xl font-bold">
            NP.
          </Link>
        )}

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => renderLink(link, false))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="rounded-lg border-2 border-ink p-2"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
            className="overflow-hidden border-t-2 border-ink bg-surface md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => renderLink(link, true))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
