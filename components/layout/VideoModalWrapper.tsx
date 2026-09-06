"use client";

import { useState, useEffect } from "react";
import { VideoModal } from "@/components/layout/VideoModal";

export function VideoModalWrapper() {
  const [open, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("la73PZ5l1nw");

  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<string>;
      setVideoId(custom.detail || "la73PZ5l1nw");
      setOpen(true);
    };
    document.addEventListener("open-video", handler);
    return () => document.removeEventListener("open-video", handler);
  }, []);

  return <VideoModal open={open} onClose={() => setOpen(false)} videoId={videoId} />;
}
