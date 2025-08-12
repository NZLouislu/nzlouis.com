"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconButton } from "@radix-ui/themes";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = ["home", "about", "portfolio", "skills", "contact"];
    const fromHash =
      typeof window !== "undefined"
        ? window.location.hash.replace("#", "")
        : "";
    if (sections.includes(fromHash)) setActiveSection(fromHash || "home");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = visible[0].target.id;
          if (sections.includes(id)) setActiveSection(id);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkCls = (id: string) =>
    `hover:text-indigo-600 ${activeSection === id ? "font-bold" : ""}`;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#home" aria-label="Go to home" className="inline-block">
            <span className="sr-only">Nzlouis — Home</span>
            <div className="w-[100px] h-[30px]">
              <Image
                src="/images/nzlouis.jpg"
                alt="Nzlouis logo — Lu Louis"
                width={100}
                height={30}
                priority
                className="w-[100px] h-[30px] object-contain"
              />
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-5 text-sm md:text-base">
          <Link
            href="#home"
            className={linkCls("home")}
            onClick={() => setActiveSection("home")}
          >
            Home
          </Link>
          <Link
            href="#about"
            className={linkCls("about")}
            onClick={() => setActiveSection("about")}
          >
            About
          </Link>
          <Link
            href="#portfolio"
            className={linkCls("portfolio")}
            onClick={() => setActiveSection("portfolio")}
          >
            Portfolio
          </Link>
          <Link
            href="#skills"
            className={linkCls("skills")}
            onClick={() => setActiveSection("skills")}
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className={linkCls("contact")}
            onClick={() => setActiveSection("contact")}
          >
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
          <div className="px-6 py-3 flex flex-col gap-2 text-base">
            <Link
              href="#home"
              onClick={() => {
                setActiveSection("home");
                setOpen(false);
              }}
              className={linkCls("home")}
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={() => {
                setActiveSection("about");
                setOpen(false);
              }}
              className={linkCls("about")}
            >
              About
            </Link>
            <Link
              href="#portfolio"
              onClick={() => {
                setActiveSection("portfolio");
                setOpen(false);
              }}
              className={linkCls("portfolio")}
            >
              Portfolio
            </Link>
            <Link
              href="#skills"
              onClick={() => {
                setActiveSection("skills");
                setOpen(false);
              }}
              className={linkCls("skills")}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              onClick={() => {
                setActiveSection("contact");
                setOpen(false);
              }}
              className={linkCls("contact")}
            >
              Contact
            </Link>
            <a
              href="https://blog.nzlouis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
              onClick={() => setOpen(false)}
            >
              Blog
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
