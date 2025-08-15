"use client";

import dynamic from "next/dynamic";
import { MessageSquare } from "lucide-react";
import { useChat } from "@/app/ChatProvider";

const Webchat = dynamic(
  () => import("@botpress/webchat").then((mod) => mod.Webchat),
  { ssr: false }
);

export default function Chatbot() {
  const { open, toggleChat } = useChat();
  const clientId = process.env.NEXT_PUBLIC_CHATBOT_CLIENT_ID;
  if (!clientId) return null;

  return (
    <>
      <Webchat
        clientId={clientId}
        style={{
          width: "400px",
          height: "600px",
          display: open ? "flex" : "none",
          position: "fixed",
          bottom: "90px",
          right: "20px",
          zIndex: 999999,
        }}
      />
      <button
        onClick={toggleChat}
        aria-label={open ? "Close chat" : "Open chat"}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#1554F3",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "24px",
          padding: "0 16px",
          width: "130px",
          height: "56px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          cursor: "pointer",
          transition: "all 0.2s ease",
          zIndex: 999999,
          border: "none",
        }}
      >
        <MessageSquare size={22} strokeWidth={2.5} style={{ flexShrink: 0 }} />
        <span style={{ marginLeft: 8, fontWeight: 500 }}>
          {open ? "Close" : "Chatbot"}
        </span>
      </button>
    </>
  );
}
