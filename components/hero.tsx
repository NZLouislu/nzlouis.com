"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Text, Button, Box } from "@radix-ui/themes";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* 背景图 */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* 黑色遮罩层 */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* 内容层 */}
      <Box className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Text as="h1" size="8" weight="bold" className="text-white">
            Hi, I’m <span className="text-red-400">Louis Lu</span>
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Text
            as="p"
            size="5"
            className="text-white tracking-widest border-t border-green-400 pt-4 mt-4"
          >
            Full Stack Software Engineer
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button
            asChild
            size="3"
            radius="full"
            variant="solid"
            color="green"
            className="mt-8"
          >
            <Link href="/about">About me</Link>
          </Button>
        </motion.div>
      </Box>
    </section>
  );
}
