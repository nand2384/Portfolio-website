"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { motion } from "motion/react";

export function ProjectModal({ children }: { children: ReactNode }) {
  const router = useRouter();
  const close = () => router.back();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      onClick={close}
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink/40 px-4 py-10 sm:items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-2xl rounded-xl border-2 border-ink bg-surface p-6 shadow-[var(--shadow-hard)] sm:p-8"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-lg border-2 border-ink bg-surface p-1.5 transition-transform hover:-translate-y-0.5"
        >
          <X size={18} />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
}
