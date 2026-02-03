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
            <Heading
              as="h3"
              size={{ initial: "7", md: "8" }}
              weight="bold"
              align="center"
              mb="6"
              className="text-slate-900"
            >
              Hi, I’m Louis Lu – NZLouis is my personal brand
            </Heading>

            <Box
              style={{
                maxWidth: 860,
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <Text as="p" size="3" color="gray" style={{ lineHeight: 1.7 }}>
                A Senior Software Engineer with <strong className="text-slate-900 font-bold">10+ years of global experience</strong> delivering mission-critical systems across Banking, Insurance, and Government sectors in both <strong className="text-slate-900 font-bold">China and New Zealand</strong>. I bridge the gap between <strong className="text-slate-900 font-bold">enterprise-grade stability</strong> and futuristic innovation in <strong className="text-slate-900 font-bold">AI, 3D, and Virtual Robotics</strong>.
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
                  Full-Stack Developer | AI & 3D Specialist | Virtual Robotics
                </Text>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {[
                    "React / Next.js",
                    "Java / Spring Boot",
                    "Python",
                    "Three.js",
                    "Hugging Face",
                    "Isaac Sim",
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
                I bring a unique blend of <strong className="text-slate-900 font-bold">corporate rigor</strong> and <strong className="text-slate-900 font-bold">start-up agility</strong>. Having engineered complex financial platforms and high-stakes government systems, I apply the same standards of scalability, security, and performance to modern AI and 3D spatial experiences. Whether it's 24/7 banking services or 3D digital twins, I build for production.
              </Text>

              <ul className="mt-6 space-y-3">
                {[
                  {
                    title: "Real Estate AI:",
                    content:
                      "Developing predictive models for the New Zealand property market, leveraging machine learning to forecast trends and property values.",
                  },
                  {
                    title: "3D Digital Twins:",
                    content:
                      "Building interactive 3D property showcases that allow users to virtually explore real estate with game-like immersion.",
                  },
                  {
                    title: "Full-Stack Mastery:",
                    content:
                      "10+ years scaling enterprise apps in Banking and Gov, ensuring AI/3D tools meet production-grade standards.",
                  },
                  {
                    title: "Global Context:",
                    content:
                      "Seasoned in both the high-velocity China tech scene and NZ's quality-focused enterprise landscape.",
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
