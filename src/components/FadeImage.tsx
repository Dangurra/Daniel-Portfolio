"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export function FadeImage({
  className = "",
  loadedClassName = "opacity-100",
  ...props
}: ImageProps & { loadedClassName?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text -- alt is required by ImageProps and passed via spread
    <Image
      {...props}
      onLoad={(e) => {
        setLoaded(true);
        props.onLoad?.(e);
      }}
      className={`transition-opacity duration-700 ease-out ${loaded ? loadedClassName : "opacity-0"} ${className}`}
    />
  );
}
