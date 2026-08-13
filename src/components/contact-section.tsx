"use client";

import { type FormEvent, useState } from "react";
import { FileText, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nand2384@gmail.com",
    href: "mailto:nand2384@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/nand2384",
    href: "https://github.com/nand2384",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nand-patel-2308np6409",
    href: "https://www.linkedin.com/in/nand-patel-2308np6409/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Surat, Gujarat, India",
    href: null,
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        toast.success("Message sent successfully!");
      } else {
        toast.error("Message failed to send.");
      }
    } catch {
      toast.error("Message failed to send.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t-2 border-ink px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <p className="font-mono text-sm uppercase tracking-wide text-accent-coral">
              Contact
            </p>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Let&apos;s talk.
            </h2>
            <p className="text-ink/80">
              Open to freelance work and full-time opportunities. Reach out
              directly, or use the form.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <div className="flex items-center gap-4 rounded-lg border-2 border-ink bg-card-mint px-4 py-3">
                  <Icon size={18} />
                  <div className="flex flex-col">
                    <span className="font-mono text-xs uppercase tracking-wide text-ink/60">
                      {info.label}
                    </span>
                    <span className="text-sm font-medium">{info.value}</span>
                  </div>
                </div>
              );

              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="transition-transform hover:-translate-y-0.5"
                >
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}

            <a
              href="/Nand_Patel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg border-2 border-ink bg-accent-yellow px-4 py-3 transition-transform hover:-translate-y-0.5"
            >
              <FileText size={18} />
              <span className="text-sm font-medium">Download resume</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 26,
            delay: 0.08,
          }}
          className="flex flex-col gap-4 rounded-xl border-2 border-ink bg-surface p-6 shadow-[var(--shadow-hard)]"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-lg border-2 border-ink bg-surface px-3 py-2 text-sm outline-none focus:border-accent-coral"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-lg border-2 border-ink bg-surface px-3 py-2 text-sm outline-none focus:border-accent-coral"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="subject" className="font-mono text-xs uppercase tracking-wide">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="rounded-lg border-2 border-ink bg-surface px-3 py-2 text-sm outline-none focus:border-accent-coral"
              placeholder="Project inquiry"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="resize-none rounded-lg border-2 border-ink bg-surface px-3 py-2 text-sm outline-none focus:border-accent-coral"
              placeholder="Tell me about your project..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98, x: 2, y: 2 }}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg border-2 border-ink bg-card-pink px-6 py-3 font-medium shadow-[var(--shadow-hard)] transition-shadow active:shadow-none disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send message"}
            {!isSubmitting && <Send size={16} />}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
