"use client";

import React from "react";
import { Card, Inset, Text, Heading, Flex, Box, Badge, Dialog, IconButton } from "@radix-ui/themes";
import Link from "next/link";
import NextImage from "next/image";
import { Github, Play, X } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  stack: string[];
  link: string;
  img?: string;
  video?: string;
  github?: string;
  imgFit?: "contain" | "cover";
}

const projects: Project[] = [
  {
    title: "SmartTour 3D",
    desc: "An immersive Real Estate Digital Twin platform combining React 18 and Physics for a game-like roaming experience. Featuring programmatic cinematography, it turns 3D spatial data into cinematic 4K marketing videos via Remotion.",
    stack: ["React 18", "Three.js", "Physics", "Remotion", "Digital Twin"],
    // video: "/video/3D-SmartTour-Showcase.mp4",
    img: "/portfolio/smarttour-poster.png",
    link: "https://3dhome.nzlouis.com/",
    github: "https://github.com/NZLouislu/3d-room-roaming",
  },
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
    title: "Shop3D Showcase",
    desc: "A high-performance 3D product visualization platform using React Three Fiber. Features interactive 3D model exploration with real-time lighting and responsive design for next-gen e-commerce.",
    stack: ["React", "Three.js", "R3F", "GLSL", "E-commerce"],
    video: "/video/shop3d-showcase.mp4",
    img: "/portfolio/shop3d-poster.png",
    imgFit: "contain",
    link: "https://shop3d.nzlouis.com/",
    github: "https://github.com/NZLouislu/Shop3D",
  },
  {
    title: "github-projects-md-sync",
    desc: "An npm package that syncs GitHub projects into Markdown files, reaching hundreds of downloads within its first day.",
    stack: ["Node.js", "npm", "Open Source"],
    img: "/portfolio/github-projects-md-sync.png",
    link: "https://www.npmjs.com/package/github-projects-md-sync",
    github: "https://github.com/NZLouislu/github-projects-md-sync",
  },
  {
    title: "Property Prediction System",
    desc: "Advanced Big Data analysis and AI modeling for Auckland & Wellington property markets. Provides precise sales predictions and market trend visualizations.",
    stack: ["Big Data", "AI Modeling", "Data Viz", "Next.js", "Supabase"],
    img: "/portfolio/ibank.jpg",
    link: "#",
  },
  {
    title: "3D Robotics Simulation",
    desc: "High-fidelity simulation environments for robotics development and AI agent training, emphasizing realistic physics and sensor data.",
    stack: ["Gazebo", "Unity", "Physics", "Robotics", "3D Modeling"],
    img: "/portfolio/peer.jpg",
    link: "#",
  },
];

function getColumnCount(width: number) {
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
}

const ProjectCard = ({ p }: { p: Project }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <Card
        style={{
          overflow: "hidden",
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          height: "100%",
          border: "1px solid var(--gray-4)",
          background: "var(--color-panel-solid)",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Inset clip="padding-box">
          {p.video ? (
            <div
              onClick={() => setIsOpen(true)}
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                background: "black",
              }}
            >
              <video
                ref={videoRef}
                src={p.video}
                loop
                muted
                playsInline
                preload="auto"
                poster={p.img}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: p.imgFit || "cover",
                  padding: p.imgFit === "contain" ? "16px" : "0",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(0,0,0,0.1)",
                  transition: "background 0.3s",
                }}
              >
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.3)",
                    borderRadius: "50%",
                    padding: "12px",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Play size={32} fill="white" color="white" style={{ marginLeft: "4px" }} />
                </div>
              </div>
            </div>
          ) : (
            <Link href={p.link} target="_blank" rel="noopener noreferrer">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  background: "white",
                }}
              >
                <NextImage
                  src={p.img || "/portfolio/placeholder.jpg"}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  style={{
                    objectFit: p.imgFit || "cover",
                    padding: p.imgFit === "contain" ? "16px" : "0",
                  }}
                />
              </div>
            </Link>
          )}
        </Inset>

        <Box p="3">
          <Flex justify="between" align="start" mt="3" mb="2">
            <Link href={p.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Heading size="3" weight="bold" className="hover:text-blue-600 transition-colors">
                {p.title}
              </Heading>
            </Link>
            {p.github && (
              <Link
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--gray-11)", transition: "color 0.2s" }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  (e.currentTarget.style.color = "var(--blue-9)")
                }
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  (e.currentTarget.style.color = "var(--gray-11)")
                }
              >
                <Github size={18} />
              </Link>
            )}
          </Flex>

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

      {p.video && (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Content
            style={{
              maxWidth: "1000px",
              width: "90vw",
              padding: 0,
              overflow: "hidden",
              background: "black",
              aspectRatio: "16/9"
            }}
          >
            <Box style={{ position: "relative", width: "100%", height: "100%" }}>
              <video
                src={p.video}
                controls
                autoPlay
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
              <Dialog.Close>
                <IconButton
                  variant="ghost"
                  color="gray"
                  highContrast
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background: "rgba(0,0,0,0.5)",
                    color: "white",
                    borderRadius: "50%"
                  }}
                >
                  <X size={20} />
                </IconButton>
              </Dialog.Close>
            </Box>
          </Dialog.Content>
        </Dialog.Root>
      )}
    </>
  );
};

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
        size="8"
        weight="bold"
        align="center"
        mb="8"
        style={{
          background: "linear-gradient(to right, #2563eb, #7c3aed)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.02em",
        }}
      >
        FEATURED PROJECTS
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
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
