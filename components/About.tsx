import React from "react";
import ImageWithFallback from "./ImageWithFallback";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white">
      <div className="max-w-screen-xl mx-auto px-6 py-16 md:py-20">
        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600">
            About me
          </span>
          <h2
            id="about-title"
            className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
          >
            Hi, I’m Louis Lu
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            A full‑stack Software Engineer & AI specialist with 10+ years of
            experience delivering efficient, scalable systems across industries.
            I bridge software engineering and applied machine learning, from
            project planning to coding, testing, deployment, and ongoing
            optimization.
          </p>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-10 items-start md:items-center md:gap-12">
          {/* Photo + identity */}
          <figure className="md:col-span-1 justify-self-center md:justify-self-start">
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
            <figcaption className="mt-4 text-center md:text-left">
              <p className="text-lg font-semibold text-slate-900">Louis Lu</p>
              <p className="text-sm text-slate-600">
                Full‑Stack Developer & AI Engineer
              </p>
              <div className="mt-3 flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  React
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  Python
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  FastAPI
                </span>

                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  MLflow
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  Hugging Face
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  Java & Spring Boot
                </span>
              </div>
            </figcaption>
          </figure>

          {/* Narrative */}
          <div className="md:col-span-2 text-slate-700">
            <h3 className="sr-only">Profile</h3>
            <p className="leading-relaxed">
              I blend full‑stack development with machine learning: end‑to‑end
              training, MLOps, and deploying inference services. I’ve shipped
              FastAPI services wrapping Hugging Face models, built telemetry for
              drift and performance monitoring, and delivered clean web UIs that
              make model outputs actionable for product teams.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
                <div>
                  <span className="font-medium text-slate-900">Impact:</span>{" "}
                  Reduced inference latency and infra cost with quantization,
                  batching, and autoscaling; aligned metrics with product KPIs.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
                <div>
                  <span className="font-medium text-slate-900">MLOps:</span>{" "}
                  CI/CD pipelines, containerized deployments, observability
                  (logs, traces, model metrics) for reliable releases.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
                <div>
                  <span className="font-medium text-slate-900">UX:</span> Built
                  data‑aware UIs so non‑ML stakeholders can evaluate outputs,
                  compare versions, and give feedback quickly.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
                <div>
                  <span className="font-medium text-slate-900">Domains:</span>{" "}
                  Real estate, banking, insurance, and equities—prioritizing
                  reliability, compliance, and measurable value.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
