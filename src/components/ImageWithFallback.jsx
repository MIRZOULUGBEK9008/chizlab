"use client";
import { placeholderImg } from "@/constants";
import Image from "next/image";
import { useState } from "react";

export default function ImageWithFallback(props) {
  const [fallback, setFallback] = useState(false);
  return (
    <Image
      {...props}
      onError={() => {
        setFallback(true);
      }}
      src={!fallback && props.src ? props.src : placeholderImg}
      placeholder="blur"
      blurDataURL={placeholderImg}
    />
  );
}
