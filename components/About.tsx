import React from "react";
import ImageWithFallback from "./ImageWithFallback";

export default function About() {
  return (
    <section id="about" className="bg-blue-50">
      <div className="max-w-screen-xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center md:flex-row md:items-center md:gap-10 md:text-left">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="rounded-full w-[292px] h-[292px] overflow-hidden shadow-lg bg-slate-100 mx-auto md:mx-0 relative">
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
          </div>

          <div className="md:flex-1">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
              About me
            </h3>
            <p className="text-slate-700 leading-relaxed">
              I blend full-stack development with machine learning: end-to-end
              training, MLOps, and deploying inference services. I’ve deployed
              Hugging Face models with FastAPI, built telemetry for model
              monitoring, and shipped web UIs that make model outputs usable for
              product teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
