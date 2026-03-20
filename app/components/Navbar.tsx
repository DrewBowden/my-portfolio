"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="text-slate-900 font-semibold text-lg hover:text-sky-500 transition-colors">
          Drew Bowden
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-sky-500 text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/tracker"
            className="px-4 py-1.5 bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium rounded-full transition-colors"
          >
            Job Tracker
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-600 hover:text-sky-500 text-xl transition-colors"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-slate-600 hover:text-sky-500 text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/tracker"
            onClick={() => setOpen(false)}
            className="self-start px-4 py-1.5 bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium rounded-full transition-colors"
          >
            Job Tracker
          </Link>
        </div>
      )}
    </nav>
  );
}
