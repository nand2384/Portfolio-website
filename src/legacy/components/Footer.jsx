import { Github, Linkedin, Mail, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100 flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 w-full">
        {/* Top Section */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-4 tracking-tight">NP.</h2>
          <p className="text-[#6B7280] text-base mb-8 text-center">
            Let's build something great together.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
            <a href="https://github.com/nand2384" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#6B7280] hover:text-[#4CAF7D] transition-colors font-medium text-sm group">
              <Github size={18} className="group-hover:-translate-y-1 transition-transform" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/nand-patel-2308np6409/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#6B7280] hover:text-[#4CAF7D] transition-colors font-medium text-sm group">
              <Linkedin size={18} className="group-hover:-translate-y-1 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:nand2384@gmail.com" className="flex items-center gap-2 text-[#6B7280] hover:text-[#4CAF7D] transition-colors font-medium text-sm group">
              <Mail size={18} className="group-hover:-translate-y-1 transition-transform" />
              <span>Email</span>
            </a>
            <a href="/Nand_Patel_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#6B7280] hover:text-[#4CAF7D] transition-colors font-medium text-sm group">
              <FileText size={18} className="group-hover:-translate-y-1 transition-transform" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-100 h-px bg-linear-to-r from-transparent via-[#E5E7EB] to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-[#6B7280] text-sm font-medium">
            © {new Date().getFullYear()} Nand Patel • Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
