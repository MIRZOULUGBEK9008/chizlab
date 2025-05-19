"use client";
import { placeholderImg } from "@/constants";
import Image from "next/image";
import { useState } from "react";

export default function ImageWithFallback(props) {
  const [fallback, setFallback] = useState(null);
  return (
    <Image
      {...props}
      onError={() => {
        setFallback(placeholderImg);
      }}
      src={fallback === null ? props.src : fallback}
      placeholder="blur"
      blurDataURL={placeholderImg}
    />
  );
}
