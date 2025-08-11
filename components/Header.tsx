"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconButton } from "@radix-ui/themes";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Responsive rectangular logo:
              - small: 64x28 (w-16 h-7)
              - md: 128x40 (md:w-32 md:h-10)
              - lg: 160x48 (lg:w-40 lg:h-12)
              object-contain 保证按比例缩放，不会被拉伸 */}
          <Link href="#home" aria-label="Go to home" className="inline-block">
            <span className="sr-only">Nzlouis — Home</span>
            <div className="w-16 h-7 md:w-32 md:h-10 lg:w-32 lg:h-12">
              <Image
                src="/images/nzlouis.jpg"
                alt="Nzlouis logo — Lu Louis"
                width={130} /* intrinsic width (used by next/image) */
                height={38} /* intrinsic height */
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-5 text-sm md:text-base">
          <Link href="#home" className="hover:text-indigo-600">
            Home
          </Link>
          <Link href="#about" className="hover:text-indigo-600">
            About
          </Link>
          <Link href="#portfolio" className="hover:text-indigo-600">
            Portfolio
          </Link>
          <Link href="#skills" className="hover:text-indigo-600">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-indigo-600">
            Contact
          </Link>
          <a
            href="https://blog.nzlouis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600"
          >
            Blog
          </a>
        </nav>

        <div className="md:hidden">
          <IconButton
            variant="ghost"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            title="Toggle menu"
          >
            {open ? <Cross2Icon /> : <HamburgerMenuIcon />}
          </IconButton>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/95">
          <div className="px-6 py-4 flex flex-col gap-3">
            <Link href="#home" onClick={() => setOpen(false)} className="py-2">
              Home
            </Link>
            <Link href="#about" onClick={() => setOpen(false)} className="py-2">
              About
            </Link>
            <Link
              href="#portfolio"
              onClick={() => setOpen(false)}
              className="py-2"
            >
              Portfolio
            </Link>
            <Link
              href="#skills"
              onClick={() => setOpen(false)}
              className="py-2"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="py-2"
            >
              Contact
            </Link>
            <a
              href="https://blog.nzlouis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2"
            >
              Blog
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
