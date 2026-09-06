"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export function Dialog({ open, onClose, children, title }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }

    const handleClose = () => {
      onClose();
    };

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [open, onClose]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-50 m-auto max-h-[90vh] max-w-2xl overflow-y-auto rounded-[22px] border border-line bg-white p-6 shadow-[0_30px_60px_-20px_rgb(0_0_88_/_0.28)] backdrop:bg-navy/40 open:animate-fade-in"
      onClose={onClose}
    >
      <div className="flex items-center justify-between mb-4">
        {title && <h3 className="text-xl font-bold text-navy">{title}</h3>}
        <button
          type="button"
          onClick={onClose}
          className="ml-auto text-2xl leading-none text-ink-3 hover:text-navy transition-colors"
          aria-label="Close"
        >
          ×
        </button>
      </div>
      {children}
    </dialog>
  );
}
