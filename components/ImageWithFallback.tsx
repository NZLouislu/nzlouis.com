"use client";

import { CSSProperties, useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  sizes?: string;
  style?: CSSProperties;
};

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className,
  fallbackSrc = "/photo-placeholder-circle.png",
  priority,
  sizes,
  style,
}: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => {
        if (imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
      }}
      priority={priority}
      sizes={sizes}
      style={style}
    />
  );
}
