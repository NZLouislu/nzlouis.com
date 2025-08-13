import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export const metadata = {
  title: "Louis Lu — AI Engineer",
  description: "Full-stack + ML engineer — Hugging Face in production",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Theme accentColor="purple" grayColor="auto" radius="large" scaling="100%">
          {children}
        </Theme>
      </body>
    </html>
  );
}
