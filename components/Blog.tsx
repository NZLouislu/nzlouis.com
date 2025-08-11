import React from "react";
import { Link as RadixLink } from "@radix-ui/themes";

export default function Blog() {
  return (
    <div className="text-center mt-6">
      <RadixLink
        href="https://blog.nzlouis.com"
        target="_blank"
        rel="noopener noreferrer"
        size="2"
      >
        Read my blog → blog.nzlouis.com
      </RadixLink>
    </div>
  );
}
