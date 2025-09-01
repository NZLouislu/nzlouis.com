"use client";

import React from "react";
import { Card, Inset, Text, Heading, Flex, Box, Badge } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "NZLouis AI Quiz",
    desc: "Next.js quiz platform using open‑source, Gemini AI and Hugging Face for quiz generation, topic suggestions, and 'Ask AI' assistance, with cost‑optimized multi‑model routing.",
    stack: [
      "Next.js",
      "React",
      "Styled‑Components",
      "Open‑Source AI Models",
      "Gemini AI",
      "Hugging Face",
      "API Integration",
    ],
    img: "/portfolio/nzlouis-ai-quiz.jpg",
    link: "https://quiz.nzlouis.com",
  },
  {
    title: "Online Books System",
    desc: "Implemented using React and react-bootstrap. Contains functions such as books and authors.",
    stack: ["React", "Bootstrap", "Node.js"],
    img: "/portfolio/books.jpg",
    link: "https://books.nzlouis.com",
  },
  {
    title: "Folio Insurance System",
    desc: "Secure online insurance platform with user dashboards and payment integration.",
    stack: ["React", "Next.js", "Stripe API"],
    img: "/portfolio/folio.jpg",
    link: "/https://www.folio.insure",
  },
  {
    title: "Peer Evaluation System",
    desc: "Evaluate peers online with scoring standards, reports, and data analysis.",
    stack: ["React", "Express", "MongoDB"],
    img: "/portfolio/peer.jpg",
    link: "https://peer.nzlouis.com",
  },
  {
    title: "Tenei Job Hunting for Maori",
    desc: "Platform connecting Maori job seekers with employers, highlighting skills.",
    stack: ["React", "Node.js", "Postgres"],
    img: "/portfolio/tenei.jpg",
    link: "https://example.com/tenei",
  },
  {
    title: ".NET System: Online Event Registration",
    desc: "Online registration system for events with email notifications.",
    stack: [".NET", "C#", "SQL Server"],
    img: "/portfolio/online.jpg",
    link: "https://example.com/event",
  },
  {
    title: "Louis' Blog",
    desc: "Personal blog to share thoughts and projects.",
    stack: ["Next.js", "Markdown", "Vercel"],
    img: "/portfolio/blog.jpg",
    link: "https://blog.nzlouis.com",
  },
  {
    title: "Internet Financial Analysis System",
    desc: "Financial market analysis with charts, predictions, and reports.",
    stack: ["Python", "Django", "ECharts"],
    img: "/portfolio/ibank.jpg",
    link: "https://example.com/finance",
  },
  {
    title: "OpenAPI System",
    desc: "API service with Swagger documentation and authentication.",
    stack: ["Node.js", "Express", "OpenAPI"],
    img: "/portfolio/openapi.jpg",
    link: "https://openapi.nzlouis.com",
  },
];

function getColumnCount(width: number) {
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
}

export default function Portfolio() {
  const [cols, setCols] = React.useState(1);

  React.useEffect(() => {
    const update = () => setCols(getColumnCount(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <Box id="portfolio" px="5" py="8" style={{ width: "100%" }}>
      <Heading
        size="6"
        weight="bold"
        align="center"
        mb="6"
        style={{ color: "blue" }}
      >
        PORTFOLIO
      </Heading>

      <Box
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            gap: "20px",
            alignItems: "stretch",
          }}
        >
          {projects.map((p) => (
            <Card
              key={p.title}
              style={{
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.2s ease, boxShadow 0.2s ease",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Inset clip="padding-box">
                <Link href={p.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={800}
                    height={760}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "240px",
                      display: "block",
                    }}
                  />
                </Link>
              </Inset>

              <Box p="3">
                <Heading mt="3" size="3" weight="bold" mb="2">
                  {p.title}
                </Heading>

                <Text as="p" size="2" color="gray">
                  {p.desc}
                </Text>

                <Flex gap="2" mt="3" wrap="wrap">
                  {p.stack.map((tech) => (
                    <Badge key={tech} color="blue" variant="soft" size="1">
                      {tech}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
