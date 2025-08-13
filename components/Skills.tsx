"use client";

import React from "react";
import { Heading, Text } from "@radix-ui/themes";

export default function Skills() {
  return (
    <section id="skills" className="bg-blue-50">
      <div className="max-w-screen-xl mx-auto px-6 py-16 md:py-20 flex flex-col items-center text-center">
        <Heading
          as="h3"
          mb="6"
          size={{ initial: "6", md: "7" }}
          weight="bold"
          className="tracking-tight mb-6"
        >
          Skills
        </Heading>

        <div className="grid md:grid-cols-3 gap-4 w-full max-w-4xl">
          {[
            {
              title: "Languages & DL",
              content: "Python, PyTorch, TensorFlow",
            },
            {
              title: "Deployment",
              content: "FastAPI, TorchServe, Docker",
            },
            {
              title: "Cloud & Infra",
              content: "AWS, GCP, Kubernetes, Terraform",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm"
            >
              <Text
                size="3"
                mb="4"
                weight="medium"
                className="block text-slate-900 mb-1"
              >
                {skill.title}
              </Text>
              <Text as="div" size="3" className="text-slate-700">
                {skill.content}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
