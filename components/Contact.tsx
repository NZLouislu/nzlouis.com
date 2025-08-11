import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="max-w-screen-xl mx-auto px-6 py-16 md:py-20 flex flex-col items-center text-center">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl px-8 py-12 shadow w-full max-w-4xl">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">
            Let’s talk
          </h3>
          <p className="mb-6 text-blue-50">
            Open to US-remote roles as AI Developer / ML Engineer. Reach out for
            a quick chat or tech screen.
          </p>
          <a
            className="inline-block px-6 py-3 rounded-lg bg-white text-blue-700 font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white transition"
            href="mailto:contact@nzlouis.com"
          >
            contact@nzlouis.com
          </a>
        </div>
      </div>
    </section>
  );
}
