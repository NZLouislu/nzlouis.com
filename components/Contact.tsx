"use client";

import React from "react";
import { Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="max-w-screen-xl mx-auto px-6 py-16 md:py-20 flex flex-col items-center text-center">
        <div className="w-full max-w-4xl bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl px-8 py-12 shadow">
          <Heading
            id="contact-title"
            as="h2"
            mb="5"
            size={{ initial: "6", md: "7" }}
            weight="bold"
          >
            Contact Me
          </Heading>

          <Text
            as="p"
            mt="4"
            className="mt-4 mb-6 text-blue-50 font-semibold"
            size="3"
          >
            Open to remote roles in the US or Australia as an AI / ML /
            Full-Stack Engineer.
          </Text>

          <Text
            as="p"
            mt="4"
            mb="5"
            className=" text-blue-50 font-semibold"
            size="3"
          >
            Proven ability to align seamlessly with US and AU business hours
            from New Zealand.
          </Text>

          {/* Email CTA */}
          <div className="flex justify-center">
            <Link
              href="mailto:nzlouis.com@gmail.com?subject=Hi%20Louis%2C%20let%E2%80%99s%20talk"
              aria-label="Email Louis Lu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-blue-700 font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 transition shadow-sm"
            >
              <MailIcon className="h-5 w-5" />
              <Text as="span" size="3" weight="medium">
                nzlouis.com@gmail.com
              </Text>
            </Link>
          </div>

          <Text as="p" size="2" mt="5" className="text-blue-100">
            Preferred contact: Email or LinkedIn.
          </Text>

          {/* Social / links row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="https://www.linkedin.com/in/ailouis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn - Louis Lu"
              title="LinkedIn"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <LinkedInIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>

            <Link
              href="https://github.com/ailouislu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub - Louis Lu"
              title="GitHub"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <GitHubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>

            <Link
              href="https://blog.nzlouis.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blog - Louis Lu"
              title="Blog"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <BlogBIcon className="h-5 w-5" />
              <span className="sr-only">Blog</span>
            </Link>

            <Link
              href="https://nzlouis.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website - nzlouis.com"
              title="Website"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <GlobeIcon className="h-5 w-5" />
              <span className="sr-only">Website</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— Inline Icons ——— */
function MailIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.17-3.37-1.17-.45-1.14-1.11-1.44-1.11-1.44-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03 .9 1.53 2.36 1.09 2.94.83 .09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.32 1.9-1.29 2.74-1.02 2.74-1.02 .55 1.38.21 2.4.11 2.65 .64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94 .36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.06c.53-1 1.84-2.06 3.8-2.06 4.06 0 4.81 2.67 4.81 6.14V23h-4v-5.9c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.27 1.54-2.27 3.13V23h-4V8.5z" />
    </svg>
  );
}

function GlobeIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c3 3.5 3 14.5 0 18-3-3.5-3-14.5 0-18z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BlogBIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <text
        x="5"
        y="17"
        fontSize="14"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        B
      </text>
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        ry="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
