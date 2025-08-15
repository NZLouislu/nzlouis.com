import "./globals.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "NZLouis — AI | ML Engineer",
  description: "Full-stack + ML engineer — Hugging Face in production",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
