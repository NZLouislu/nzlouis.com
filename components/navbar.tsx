"use client";

import { Container, Flex } from "@radix-ui/themes";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 border-b">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Flex justify="between" align="center" className="w-full">
          <div className="flex items-center gap-4 min-w-0">
            <Link href="/" className="text-white text-2xl flex-shrink-0">
              <AiFillBug />
            </Link>

            <NavLinks />
          </div>
        </Flex>
      </Container>
    </nav>
  );
}

function NavLinks() {
  const currentPath = usePathname();

  const links = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "SKILLS", href: "#skills" },
    { label: "CONTACT", href: "#contact" },
    { label: "BLOG", href: "#blog" },
  ];

  return (
    <ul className="flex items-center space-x-6 overflow-x-auto whitespace-nowrap -mx-1">
      {links.map((link) => (
        <li key={link.href} className="flex-shrink-0 mx-1">
          <Link
            href={link.href}
            className={classnames(
              "relative inline-block px-1 py-0.5 text-white transition-colors duration-200 group",
              { "!text-green-400": link.href === currentPath }
            )}
          >
            {link.label}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
