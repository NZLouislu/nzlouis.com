"use client";

import { Theme } from "@radix-ui/themes";
import { ChatProvider } from "./ChatProvider";
import Chatbot from "@/components/Chatbot";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme accentColor="purple" grayColor="auto" radius="large" scaling="100%">
      <ChatProvider>
        <GoogleAnalytics />
        {children}
        <Chatbot />
      </ChatProvider>
    </Theme>
  );
}
