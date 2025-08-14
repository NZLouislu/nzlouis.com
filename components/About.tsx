"use client";

import { Box, Heading, Text } from "@radix-ui/themes";
import ImageWithFallback from "./ImageWithFallback";

export default function About() {
  return (
    <Box
      asChild
      style={{
        backgroundColor: "var(--blue-2)",
      }}
    >
      <section id="about" aria-labelledby="about-title">
        <div className="max-w-6xl mx-auto px-5 md:px-6 py-12 md:py-16">
          <Box id="about" px="5" py="8" style={{ width: "100%" }}>
            <Heading
              id="about-title"
              size={{ initial: "6", md: "7" }}
              weight="bold"
              align="center"
              mb="6"
              style={{ color: "blue" }}
            >
              ABOUT ME
            </Heading>
            <Box
              style={{
                maxWidth: 860,
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <Text as="p" size="3" color="gray" style={{ lineHeight: 1.7 }}>
                A full-stack Software Engineer & AI specialist with 10+ years of
                experience delivering efficient, scalable systems across
                industries. I bridge software engineering and applied machine
                learning, from project planning to coding, testing, deployment,
                and ongoing optimization.
              </Text>
            </Box>
          </Box>

          <div className="grid md:grid-cols-3 gap-10 items-start md:items-center md:gap-12">
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
                  Full-Stack Developer & AI / ML Engineer
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
                      className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </figcaption>
            </figure>

            <div className="md:col-span-2 text-slate-700">
              <Heading as="h3" size="4" className="sr-only">
                Profile
              </Heading>
              <Text as="p" size="3" className="leading-relaxed">
                I blend full-stack development with machine learning: end-to-end
                training, MLOps, and deploying inference services. I’ve shipped
                FastAPI services wrapping Hugging Face models, built telemetry
                for drift and performance monitoring, and delivered clean web
                UIs that make model outputs actionable for product teams.
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
                      "Built data-aware UIs so non-ML stakeholders can evaluate outputs, compare versions, and give feedback quickly.",
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
                      <Text
                        as="span"
                        weight="medium"
                        className="text-slate-900"
                      >
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
    </Box>
  );
}
