"use client";

import { createContext, useContext, useMemo, useState } from "react";

type ChatContextValue = {
  open: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
};

const ChatContext = createContext<ChatContextValue | null>(null);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const value = useMemo<ChatContextValue>(
    () => ({
      open,
      openChat: () => setOpen(true),
      closeChat: () => setOpen(false),
      toggleChat: () => setOpen((v) => !v),
    }),
    [open]
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
}
