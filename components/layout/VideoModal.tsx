"use client";

import { useEffect } from "react";
import { Dialog } from "@/components/ui/Dialog";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  videoId?: string;
}

export function VideoModal({ open, onClose, videoId = "la73PZ5l1nw" }: VideoModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title="YouTube video player"
          allow="encrypted-media; picture-in-picture"
          allowFullScreen
          className="h-full w-full rounded-xl"
        />
      </div>
    </Dialog>
  );
}
