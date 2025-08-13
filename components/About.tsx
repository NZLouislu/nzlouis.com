"use client";

import React from "react";
import { Heading, Text } from "@radix-ui/themes";
import ImageWithFallback from "./ImageWithFallback";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-blue-50">
      <div className="max-w-screen-xl mx-auto px-6 py-16 md:py-20">
        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <Text
            as="span"
            mb="4"
            size="3"
            weight="medium"
            className="inline-block tracking-widest bg-blue-50 text-blue-700"
          >
            About me
          </Text>

          <Heading
            id="about-title"
            as="h2"
            mb="6"
            size={{ initial: "6", md: "7" }}
            weight="bold"
            className="mt-3 tracking-tight text-slate-900"
          >
            Hi, I’m Louis Lu
          </Heading>

          <Text as="p" size="3" className="mt-3 text-slate-700 leading-relaxed">
            A full‑stack Software Engineer & AI specialist with 10+ years of
            experience delivering efficient, scalable systems across industries.
            I bridge software engineering and applied machine learning, from
            project planning to coding, testing, deployment, and ongoing
            optimization.
          </Text>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-10 items-start md:items-center md:gap-12">
          {/* Photo + identity */}
          <figure className="md:col-span-1 flex flex-col items-center text-center">
            <div className="rounded-full w-72 h-72 overflow-hidden shadow-lg ring-1 ring-slate-200 bg-slate-100 relative">
              <ImageWithFallback
                src="/images/Louis_large.jpg"
                alt="Lu Louis speaking and working on ML projects"
                width={292}
                height={292}
                className="block"
                fallbackSrc="/photo-placeholder-circle.png"
                priority
                style={{
                  transform: "translate(-4%, 5%) scale(1.1)",
                  transformOrigin: "center center",
                  objectFit: "cover",
                  width: "120%",
                  height: "120%",
                }}
              />
            </div>

            <figcaption className="mt-6 text-center">
              <Heading
                as="h3"
                mb="4"
                size="5"
                weight="medium"
                className="text-slate-900"
              >
                Louis Lu
              </Heading>
              <Text as="p" size="3" className="text-slate-600 mt-1">
                Full‑Stack Developer & AI Engineer
              </Text>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {[
                  "React",
                  "Python",
                  "FastAPI",
                  "MLflow",
                  "Hugging Face",
                  "Java & Spring Boot",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </figcaption>
          </figure>

          {/* Narrative */}
          <div className="md:col-span-2 text-slate-700">
            <Heading as="h3" size="4" className="sr-only">
              Profile
            </Heading>
            <Text as="p" size="3" className="leading-relaxed">
              I blend full‑stack development with machine learning: end‑to‑end
              training, MLOps, and deploying inference services. I’ve shipped
              FastAPI services wrapping Hugging Face models, built telemetry for
              drift and performance monitoring, and delivered clean web UIs that
              make model outputs actionable for product teams.
            </Text>

            <ul className="mt-6 space-y-3">
              {[
                {
                  title: "Impact:",
                  content:
                    "Reduced inference latency and infra cost with quantization, batching, and autoscaling; aligned metrics with product KPIs.",
                },
                {
                  title: "MLOps:",
                  content:
                    "CI/CD pipelines, containerized deployments, observability (logs, traces, model metrics) for reliable releases.",
                },
                {
                  title: "UX:",
                  content:
                    "Built data‑aware UIs so non‑ML stakeholders can evaluate outputs, compare versions, and give feedback quickly.",
                },
                {
                  title: "Domains:",
                  content:
                    "Real estate, banking, insurance, and equities—prioritizing reliability, compliance, and measurable value.",
                },
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
                  <div>
                    <Text as="span" weight="medium" className="text-slate-900">
                      {item.title}
                    </Text>{" "}
                    {item.content}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
