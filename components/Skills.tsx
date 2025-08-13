import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="bg-blue-50">
      <div className="max-w-screen-xl mx-auto px-6 py-16 md:py-20 flex flex-col items-center text-center">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
          Skills
        </h3>
        <div className="grid md:grid-cols-3 gap-4 w-full max-w-4xl">
          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <strong className="block text-slate-800 mb-1">
              Languages & DL
            </strong>
            <div className="text-slate-700">Python, PyTorch, TensorFlow</div>
          </div>
          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <strong className="block text-slate-800 mb-1">Deployment</strong>
            <div className="text-slate-700">FastAPI, TorchServe, Docker</div>
          </div>
          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <strong className="block text-slate-800 mb-1">Cloud & Infra</strong>
            <div className="text-slate-700">
              AWS, GCP, Kubernetes, Terraform
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
