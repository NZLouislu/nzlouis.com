"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Container,
  VisuallyHidden,
} from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { useChat } from "@/app/ChatProvider";

export default function Contact() {
  const { openChat } = useChat();

  return (
    <Box id="contact" aria-labelledby="contact-title">
      <Container size="4" px="6" py={{ initial: "6", md: "8" }}>
        <Flex direction="column" align="center">
          <Box
            width="100%"
            maxWidth="960px"
            p={{ initial: "5", md: "7" }}
            style={{
              backgroundColor: "#1554F3",
              color: "white",
              borderRadius: "16px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              textAlign: "center",
            }}
          >
            <Heading
              id="contact-title"
              as="h2"
              size={{ initial: "6", md: "7" }}
              weight="bold"
              mb="6"
            >
              Contact Me
            </Heading>

            <Text
              as="p"
              size="3"
              weight="bold"
              mb="3"
              style={{ color: "rgba(255,255,255,0.95)" }}
            >
              Open to remote roles in the US or Australia as an AI / ML /
              Full-Stack Engineer.
            </Text>

            <Text
              as="p"
              size="3"
              weight="bold"
              mb="5"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              Proven ability to align seamlessly with US and AU business hours
              from New Zealand.
            </Text>

            <Flex justify="center" gap="3" mb="4" wrap="wrap">
              <Button
                asChild
                size="3"
                style={{ backgroundColor: "white", color: "var(--blue-11)" }}
              >
                <Link
                  href="mailto:nzlouis.com@gmail.com?subject=Hi%20Louis%2C%20let%E2%80%99s%20talk"
                  aria-label="Email Louis Lu"
                >
                  <MailIcon style={{ width: 20, height: 20 }} />
                  <Text
                    as="span"
                    size="3"
                    weight="medium"
                    style={{ marginLeft: 8 }}
                  >
                    nzlouis.com@gmail.com
                  </Text>
                </Link>
              </Button>

              <Button
                size="3"
                onClick={openChat}
                style={{ backgroundColor: "white", color: "var(--blue-11)" }}
                aria-label="Chat with me"
                title="Chat with me"
              >
                <CIcon style={{ width: 20, height: 20 }} />
                <Text
                  as="span"
                  size="3"
                  weight="medium"
                  style={{ marginLeft: 8 }}
                >
                  Chat with me
                </Text>
              </Button>
            </Flex>

            <Text as="p" size="2" style={{ color: "rgba(255,255,255,0.8)" }}>
              Preferred contact: Email, LinkedIn or Chat with me.
            </Text>

            <Flex mt="5" gap="3" justify="center" wrap="wrap">
              <Button
                asChild
                size="2"
                variant="soft"
                style={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  color: "white",
                }}
              >
                <Link
                  href="https://www.linkedin.com/in/ailouis"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn - Louis Lu"
                  title="LinkedIn"
                >
                  <LinkedInIcon style={{ width: 20, height: 20 }} />
                  <VisuallyHidden>LinkedIn</VisuallyHidden>
                </Link>
              </Button>

              <Button
                asChild
                size="2"
                variant="soft"
                style={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  color: "white",
                }}
              >
                <Link
                  href="https://github.com/nzlouislu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub - Louis Lu"
                  title="GitHub"
                >
                  <GitHubIcon style={{ width: 20, height: 20 }} />
                  <VisuallyHidden>GitHub</VisuallyHidden>
                </Link>
              </Button>

              <Button
                asChild
                size="2"
                variant="soft"
                style={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  color: "white",
                }}
              >
                <Link
                  href="https://blog.nzlouis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Blog - Louis Lu"
                  title="Blog"
                >
                  <BlogBIcon style={{ width: 20, height: 20 }} />
                  <VisuallyHidden>Blog</VisuallyHidden>
                </Link>
              </Button>

              <Button
                size="2"
                variant="soft"
                style={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  color: "white",
                }}
                onClick={openChat}
                aria-label="Chatbot"
                title="Chatbot"
              >
                <CIcon style={{ width: 20, height: 20 }} />
                <VisuallyHidden>Chatbot</VisuallyHidden>
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

function MailIcon({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.17-3.37-1.17-.45-1.14-1.11-1.44-1.11-1.44-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03 .9 1.53 2.36 1.09 2.94.83 .09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.32 1.9-1.29 2.74-1.02 2.74-1.02 .55 1.38.21 2.4.11 2.65 .64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94 .36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  );
}

function LinkedInIcon({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.06c.53-1 1.84-2.06 3.8-2.06 4.06 0 4.81 2.67 4.81 6.14V23h-4v-5.9c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.27 1.54-2.27 3.13V23h-4V8.5z" />
    </svg>
  );
}

function BlogBIcon({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <text
        x="5"
        y="17"
        fontSize="14"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        B
      </text>
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        ry="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CIcon({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <text
        x="6.5"
        y="17"
        fontSize="14"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        C
      </text>
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        ry="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
