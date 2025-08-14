"use client";

import { Box, Flex, Heading, Text, Button, Container } from "@radix-ui/themes";
import Link from "next/link";

export default function Hero() {
  return (
    <Box id="home" position="relative">
      <Container
        size="4"
        position="relative"
        px="6"
        py={{ initial: "6", md: "8" }}
      >
        <Flex
          direction="column"
          align="center"
          gap="5"
          style={{ textAlign: "center" }}
        >
          <Box width="100%" maxWidth="800px">
            <Flex
              align="center"
              justify="center"
              gap="2"
              px="3"
              py="1"
              mb="4"
              style={{
                borderRadius: "9999px",
                backgroundColor: "transparent",
                color: "#1554F3",
                fontSize: "1rem",
                fontWeight: 500,
              }}
            >
              NZLouis · Personal brand of Louis Lu
            </Flex>
            <Heading
              as="h1"
              size={{ initial: "7", md: "9" }}
              weight="bold"
              mb="4"
              className="tracking-tight text-pretty"
              style={{ lineHeight: 1.3 }}
            >
              I build AI-powered systems for real-world impact
            </Heading>
            <Flex
              align="center"
              justify="center"
              gap="2"
              px="3"
              py="1"
              mb="4"
              style={{
                borderRadius: "9999px",
                backgroundColor: "transparent",
                color: "#1554F3",
                fontSize: "1rem",
                fontWeight: 500,
              }}
            >
              Full-stack Developer · AI Engineer
              <Text aria-hidden="true" style={{ opacity: 0.5 }}>
                •
              </Text>
              Hugging Face in production
            </Flex>
            <Text as="p" size="3" mb="6" style={{ lineHeight: 1.6 }}>
              End-to-end AI systems built with Hugging Face, RAG, and vector
              search. Delivered through full-stack pipelines using FastAPI,
              Docker, observability, and scalable architecture.
            </Text>
            <Flex justify="center" wrap="wrap" gap="3" mb="6">
              <Button
                asChild
                size="3"
                style={{
                  backgroundColor: "#1554F3",
                  color: "white",
                }}
              >
                <Link href="#portfolio" aria-label="portfolio">
                  View portfolio
                </Link>
              </Button>
              <Button
                asChild
                size="3"
                style={{
                  border: "1px solid #3B82F6",
                  color: "#3B82F6",
                  backgroundColor: "transparent",
                }}
              >
                <Link href="#about">About me</Link>
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
