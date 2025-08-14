"use client";

import React from "react";
import { Box, Card, Heading, Text, Flex } from "@radix-ui/themes";
import { Cpu, Server, Layout, Cloud, Database, Users } from "lucide-react";

export default function Skills() {
  const skillsData = [
    {
      title: "AI / Machine Learning",
      content:
        "Hugging Face, PyTorch, TensorFlow, Scikit-Learn, Generative AI, Model Optimization, MLOps (TorchServe, Model Deployment)",
      icon: Cpu,
    },
    {
      title: "Backend & APIs",
      content:
        "Python (FastAPI, Flask), Node.js (Express), Java (Spring Boot), .NET, RESTful APIs, GraphQL, Microservices Architecture",
      icon: Server,
    },
    {
      title: "Frontend & UI",
      content:
        "React, Next.js, Vue.js, TypeScript, JavaScript, UX/UI Design, Responsive Web Design",
      icon: Layout,
    },
    {
      title: "Cloud & DevOps",
      content:
        "AWS (Lambda, S3, CloudWatch), GCP, Azure, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, Vercel, Auth0",
      icon: Cloud,
    },
    {
      title: "Databases & Infrastructure",
      content: "MySQL, DynamoDB, MongoDB, Redis, Oracle, SQL Server, Supabase",
      icon: Database,
    },
    {
      title: "Development Practices & Collaboration",
      content:
        "Agile (Scrum), Test-Driven Development, UI/UX Best Practices, Git, Jira, Confluence, Teams, Cross-time zone coordination & remote teamwork",
      icon: Users,
    },
  ];

  return (
    <Box
      id="skills"
      className="bg-gradient-to-b from-blue-50 to-white"
      py={{ initial: "6", md: "9" }}
    >
      <Box className="max-w-screen-xl mx-auto px-6 text-center">
        <Heading
          as="h3"
          size={{ initial: "6", md: "7" }}
          weight="bold"
          mb="6"
          style={{ color: "blue" }}
          className="tracking-tight"
        >
          Skills
        </Heading>

        <Flex
          wrap="wrap"
          gap="5"
          justify="center"
          className="max-w-6xl mx-auto"
        >
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.title}
                variant="surface"
                className="flex-1 min-w-[280px] max-w-[380px] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white/90 backdrop-blur-sm p-4"
              >
                <Flex align="center" gap="3" mb="3">
                  <Box className="p-2 bg-blue-100 rounded-lg">
                    <Icon size={22} className="text-blue-600" />
                  </Box>
                  <Heading as="h4" size="4" weight="medium">
                    {skill.title}
                  </Heading>
                </Flex>
                <Text
                  as="div"
                  size="2"
                  color="gray"
                  className="leading-relaxed"
                >
                  {skill.content}
                </Text>
              </Card>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
}
