"use client";

import { useState, useEffect } from "react";
import { QuoteModal } from "@/components/layout/QuoteModal";

export function QuoteModalWrapper() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    document.addEventListener("open-quote", handler);
    return () => document.removeEventListener("open-quote", handler);
  }, []);

  return <QuoteModal open={open} onClose={() => setOpen(false)} />;
}
