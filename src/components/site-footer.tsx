export function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center">
        <span className="font-heading text-lg font-bold">NP.</span>
        <p className="font-mono text-xs text-ink/60">
          © {new Date().getFullYear()} Nand Patel
        </p>
      </div>
    </footer>
  );
}
