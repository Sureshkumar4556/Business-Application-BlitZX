"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-void/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="/" className="font-display text-xl font-extrabold tracking-tight">
          <span className="text-chrome-gradient">Blitz</span>
          <span className="text-bolt-gradient">X</span>
        </a>

        <ul className="hidden items-center gap-8 font-body text-sm text-chrome-300 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="transition-colors hover:text-chrome-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a href="/login" className="font-body text-sm text-chrome-300 hover:text-chrome-100">
            Log in
          </a>
          <a
            href="/register"
            className="rounded-sm bg-bolt-gradient px-4 py-2 font-body text-sm font-semibold text-void shadow-bolt-glow transition-transform hover:scale-[1.03]"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
