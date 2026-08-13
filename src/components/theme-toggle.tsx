"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const noopSubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        className="rounded-lg border-2 border-ink px-4 py-2 font-mono text-sm opacity-0"
      >
        Toggle theme
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-lg border-2 border-ink bg-surface px-4 py-2 font-mono text-sm shadow-[var(--shadow-hard)] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
    >
      {isDark ? "Switch to light" : "Switch to dark"}
    </button>
  );
}
