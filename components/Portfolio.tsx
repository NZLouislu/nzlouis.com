import React from "react";
import { Card } from "@radix-ui/themes";

const projects = [
  {
    title: "AI Resume Assistant",
    desc: "End-to-end transformer deploy with FastAPI, Docker, and a clean frontend. Implemented CI/CD, usage analytics, and cost-aware inference.",
    stack: "Python · FastAPI · Hugging Face · Docker · Postgres",
  },
  {
    title: "Image Classifier for Diagnostics",
    desc: "Training pipeline for medical images with augmentation, validation, and automated retraining hooks.",
    stack: "PyTorch · MLflow · Kubernetes · AWS S3",
  },
  {
    title: "E-commerce Platform (Full-stack)",
    desc: "Frontend + backend + realtime features; integrated payments and search ranking using lightweight ML features.",
    stack: "Next.js · Node.js · Postgres · Redis",
  },
  {
    title: "MLOps Pipeline",
    desc: "Reproducible pipelines with monitoring, drift detection, and scheduled retraining for production models.",
    stack: "Airflow · Docker · Prometheus · Grafana",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="max-w-screen-xl mx-auto px-6 py-16 md:py-20 flex flex-col items-center text-center">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
          Portfolio — selected projects
        </h3>

        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
          {projects.map((p) => (
            <Card key={p.title} className="p-6">
              <h4 className="font-bold text-lg">{p.title}</h4>
              <p className="mt-2 text-slate-700">{p.desc}</p>
              <div className="mt-3 text-sm text-slate-600">
                <strong className="font-medium">Stack:</strong> {p.stack}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
