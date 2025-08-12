import { Card, Heading, Text } from "@radix-ui/themes";

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

        <div className="w-full max-w-4xl">
          <Heading
            mb="5"
            as="h2"
            size="2"
            weight="medium"
            className="text-sm uppercase tracking-wider text-slate-500 mb-3"
          >
            Industry use cases
          </Heading>

          <ul className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Real estate",
                desc: "Semantic property search and recommendations with embeddings; normalize listings and extract key attributes.",
                models:
                  "Sentence-Transformers, T5/FLAN for cleaning & summarization",
                stack: "FAISS/Vector DB, FastAPI",
              },
              {
                title: "Banking",
                desc: "RAG over statements/agreements; classify intents and redact PII; improve agent response quality.",
                models:
                  "BERT/RoBERTa classifiers, token-classification for PII, rerankers",
                stack: "Vector search, policy guards, observability",
              },
              {
                title: "Insurance",
                desc: "Claims triage from forms and photos; summarize adjuster notes; detect potential fraud patterns.",
                models: "LayoutLM for documents, Whisper+summarizers for calls",
                stack: "Async pipelines, monitoring, cost controls",
              },
              {
                title: "Equities",
                desc: "News/filings sentiment and entity extraction; RAG research copilots with auditable sources.",
                models: "FinBERT/sentiment, NER extractors, rerankers",
                stack: "ETL to vector DB, latency-aware serving",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-4 border border-slate-200 rounded-lg bg-white/60"
              >
                <Text as="div" className="font-semibold text-slate-900">
                  {item.title}
                </Text>
                <Text as="p" size="2" className="text-slate-700 mt-1">
                  {item.desc}
                </Text>
                <Text as="div" size="1" className="text-slate-600 mt-2">
                  <strong className="font-medium">Models:</strong> {item.models}
                  <span className="mx-1">·</span>
                  <strong className="font-medium">Stack:</strong> {item.stack}
                </Text>
              </Card>
            ))}
          </ul>

          <Text
            mt="5"
            mb="5"
            as="p"
            size="1"
            className="text-xs text-slate-500 mt-4"
          >
            Shipping with tests, telemetry, and rollout strategies (A/B &
            canary). p95 latency targets and budget caps respected.
          </Text>
        </div>

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
