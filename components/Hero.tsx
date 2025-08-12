"use client";

import { Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none" />

      <div className="relative max-w-screen-xl mx-auto px-6 py-16 md:py-20 flex flex-col items-center text-center">
        <div className="w-full max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-5">
            Full-stack Developer · AI Engineer
            <span className="mx-1 text-slate-300">•</span>
            Hugging Face in production
          </div>

          <Heading
            mb="6"
            as="h1"
            size={{ initial: "7", md: "9" }}
            weight="bold"
            className="tracking-tight leading-tight text-pretty mb-4"
          >
            I build AI-powered systems for real-world impact
          </Heading>

          <Text
            mb="5"
            mt="3"
            as="p"
            size="3"
            className="text-slate-700 leading-relaxed mb-6"
          >
            End-to-end AI systems built with Hugging Face, RAG, and vector
            search. Delivered through full-stack pipelines using FastAPI,
            Docker, observability, and scalable architecture.
          </Text>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <Link
              className="px-5 py-3 rounded-lg bg-blue-700 text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              href="mailto:contact@nzlouis.com"
              aria-label="Email Louis to discuss a role"
            >
              Email me
            </Link>
            <Link
              className="px-5 py-3 rounded-lg border border-slate-200 text-blue-700 hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              href="#portfolio"
            >
              View portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
