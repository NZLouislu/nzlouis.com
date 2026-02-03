"use client";

import { Box, Flex, Heading, Text, Button, Container } from "@radix-ui/themes";
import Link from "next/link";
import { useChat } from "@/app/ChatProvider";
import dynamic from "next/dynamic";

// Dynamically import the 3D scene to avoid SSR issues with WebGL
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  const { open, toggleChat } = useChat();

  return (
    <Box
      id="home"
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #f8fafc, #e2e8f0)",
        paddingTop: "4rem",
        paddingBottom: "4rem",
      }}
    >
      <Container size="4" px="6">
        <Flex
          direction="column"
          align="center"
          gap="8"
          style={{ textAlign: "center" }}
        >
          {/* Top Section: Text Content */}
          <Flex
            direction="column"
            align="center"
            gap="5"
            style={{ maxWidth: "900px" }}
          >
            {/* Tagline Badge */}
            <Flex
              align="center"
              justify="center"
              gap="2"
              px="3"
              py="1"
              style={{
                borderRadius: "9999px",
                backgroundColor: "rgba(21, 84, 243, 0.1)",
                color: "#1554F3",
                fontSize: "0.9rem",
                fontWeight: 600,
                width: "fit-content",
                border: "1px solid rgba(21, 84, 243, 0.2)",
              }}
            >
              NZLouis · Personal brand of Louis Lu
            </Flex>

            {/* Main Heading */}
            <Heading
              as="h1"
              size={{ initial: "8", md: "9" }}
              weight="bold"
              className="tracking-tight text-pretty"
              style={{
                lineHeight: 1.1,
                background:
                  "linear-gradient(135deg, #1e293b 0%, #1554F3 50%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Building the Future with <br />
              AI & 3D Technologies
            </Heading>

            {/* Subtitles / Roles */}
            <Flex
              align="center"
              justify="center"
              gap="3"
              wrap="wrap"
              style={{
                fontSize: "1.1rem",
                fontWeight: 500,
                color: "#475569",
              }}
            >
              <Text>Full-stack Developer</Text>
              <Text style={{ color: "#cbd5e1" }}>•</Text>
              <Text>AI Expert</Text>
              <Text style={{ color: "#cbd5e1" }}>•</Text>
              <Text>3D & Robotics</Text>
            </Flex>

            {/* Description */}
            <Text
              as="p"
              size="4"
              style={{
                lineHeight: 1.6,
                color: "#334155",
                maxWidth: "600px",
              }}
            >
              Crafting immersive digital experiences and intelligent systems.
              Specializing in Hugging Face, RAG pipelines, and interactive 3D web applications.
            </Text>

            {/* CTA Buttons */}
            <Flex justify="center" wrap="wrap" gap="3" mt="2">
              <Button
                asChild
                size="3"
                variant="outline"
                style={{
                  borderColor: "#3B82F6",
                  color: "#2563eb",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                <Link href="#portfolio" aria-label="portfolio">
                  View Projects
                </Link>
              </Button>

              <Button
                asChild
                size="3"
                style={{
                  backgroundColor: "#1554F3",
                  color: "white",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px 0 rgba(21, 84, 243, 0.39)",
                }}
              >
                <Link href="#about">About Me</Link>
              </Button>

              <Button
                size="3"
                onClick={toggleChat}
                variant="outline"
                style={{
                  borderColor: "#3B82F6",
                  color: "#2563eb",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                {open ? "Close Chat" : "Talk to AI"}
              </Button>
            </Flex>
          </Flex>

          {/* Bottom Section: 3D Scene */}
          <Box
            style={{
              height: "500px",
              width: "100%",
              maxWidth: "1000px",
              position: "relative",
              //   borderRadius: "24px",
              //   overflow: "hidden",
            }}
          >
            <HeroScene />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
