import React from "react";
import { Text } from "@radix-ui/themes";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="max-w-screen-xl mx-auto px-6 py-8 text-center text-slate-600">
        <Text size="2">
          © {new Date().getFullYear()} Lu Louis. All rights reserved.
        </Text>
      </div>
    </footer>
  );
}
