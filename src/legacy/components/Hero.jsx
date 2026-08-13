import { Github, Linkedin, Mail, ArrowRight, FileText } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id) => {
    console.log("Scrolling to:", id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn("Element not found:", id);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-[#F9FAFB] overflow-hidden"
    >
      {/* Subtle static background glow */}

      <motion.div
        className="max-w-4xl mx-auto px-6 lg:px-8 py-32 relative z-10 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#1F2937] tracking-tight"
          variants={itemVariants}
        >
          Hi, I'm <span className="text-[#4CAF7D]">Nand Patel</span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-[#1F2937] mb-8 font-medium tracking-tight"
          variants={itemVariants}
        >
          Full-Stack Web Developer
        </motion.p>

        <motion.div className="mb-14" variants={itemVariants}>
          <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            I build fast, scalable web applications using modern technologies
            like React, Node.js, and PostgreSQL.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 mb-20 w-full sm:w-auto"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto group px-8 py-3.5 bg-[#4CAF7D] text-white rounded-lg font-medium hover:bg-[#3d9868] transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(76,175,125,0.2)] hover:shadow-[0_6px_20px_rgba(76,175,125,0.25)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-[#1F2937] rounded-lg font-medium hover:bg-white transition-all border border-gray-200 hover:border-gray-300 shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>

          <motion.a
            href="/Nand_Patel_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2 text-[#6B7280] hover:text-[#4CAF7D] font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText size={18} />
            <span>View Resume</span>
          </motion.a>
        </motion.div>

        <motion.div
          className="flex gap-8 justify-center"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/nand2384"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7280] hover:text-[#4CAF7D] transition-colors p-2"
            aria-label="GitHub"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={28} strokeWidth={1.5} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/nand-patel-2308np6409/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7280] hover:text-[#4CAF7D] transition-colors p-2"
            aria-label="LinkedIn"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={28} strokeWidth={1.5} />
          </motion.a>
          <motion.a
            href="mailto:nand2384@gmail.com"
            className="text-[#6B7280] hover:text-[#4CAF7D] transition-colors p-2"
            aria-label="Email"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={28} strokeWidth={1.5} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
