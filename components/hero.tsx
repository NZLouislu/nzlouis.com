import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none" />
      <div className="relative max-w-screen-xl mx-auto px-6 py-16 md:py-20 flex flex-col items-center text-center">
        <div className="w-full max-w-prose md:max-w-[62ch]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-5">
            Full-stack Developer · AI Engineer
            <span className="mx-1 text-slate-300">•</span>
            Hugging Face in production
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-pretty mb-4">
            I productionize Hugging Face models for real products.
          </h1>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Fine-tuning, RAG, and vector search—shipped with FastAPI/Docker,
            observability, and cost/latency constraints. Built end-to-end so
            your team can maintain and scale.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <a
              className="px-5 py-3 rounded-lg bg-blue-700 text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              href="mailto:contact@nzlouis.com"
              aria-label="Email Louis to discuss a role"
            >
              Email me
            </a>
            <a
              className="px-5 py-3 rounded-lg border border-slate-200 text-blue-700 hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              href="#portfolio"
            >
              View portfolio
            </a>
          </div>
        </div>

        <div className="w-full max-w-4xl">
          <h2 className="text-sm uppercase tracking-wider text-slate-500 mb-3">
            Industry use cases
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2">
            <li className="p-4 border border-slate-200 rounded-lg bg-white/60">
              <div className="font-semibold text-slate-900">Real estate</div>
              <p className="text-slate-700 text-sm mt-1">
                Semantic property search and recommendations with embeddings;
                normalize listings and extract key attributes.
              </p>
              <div className="text-xs text-slate-600 mt-2">
                <strong className="font-medium">Models:</strong>{" "}
                Sentence-Transformers, T5/FLAN for cleaning & summarization
                <span className="mx-1">·</span>
                <strong className="font-medium">Stack:</strong> FAISS/Vector DB,
                FastAPI
              </div>
            </li>

            <li className="p-4 border border-slate-200 rounded-lg bg-white/60">
              <div className="font-semibold text-slate-900">Banking</div>
              <p className="text-slate-700 text-sm mt-1">
                RAG over statements/agreements; classify intents and redact PII;
                improve agent response quality.
              </p>
              <div className="text-xs text-slate-600 mt-2">
                <strong className="font-medium">Models:</strong> BERT/RoBERTa
                classifiers, token-classification for PII, rerankers
                <span className="mx-1">·</span>
                <strong className="font-medium">Stack:</strong> Vector search,
                policy guards, observability
              </div>
            </li>

            <li className="p-4 border border-slate-200 rounded-lg bg-white/60">
              <div className="font-semibold text-slate-900">Insurance</div>
              <p className="text-slate-700 text-sm mt-1">
                Claims triage from forms and photos; summarize adjuster notes;
                detect potential fraud patterns.
              </p>
              <div className="text-xs text-slate-600 mt-2">
                <strong className="font-medium">Models:</strong> LayoutLM for
                documents, Whisper+summarizers for calls
                <span className="mx-1">·</span>
                <strong className="font-medium">Stack:</strong> Async pipelines,
                monitoring, cost controls
              </div>
            </li>

            <li className="p-4 border border-slate-200 rounded-lg bg-white/60">
              <div className="font-semibold text-slate-900">Equities</div>
              <p className="text-slate-700 text-sm mt-1">
                News/filings sentiment and entity extraction; RAG research
                copilots with auditable sources.
              </p>
              <div className="text-xs text-slate-600 mt-2">
                <strong className="font-medium">Models:</strong>{" "}
                FinBERT/sentiment, NER extractors, rerankers
                <span className="mx-1">·</span>
                <strong className="font-medium">Stack:</strong> ETL to vector
                DB, latency-aware serving
              </div>
            </li>
          </ul>

          <div className="text-xs text-slate-500 mt-4">
            Shipping with tests, telemetry, and rollout strategies (A/B &
            canary). p95 latency targets and budget caps respected.
          </div>
        </div>
      </div>
    </section>
  );
}
