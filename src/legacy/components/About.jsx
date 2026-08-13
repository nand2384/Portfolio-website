import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const highlights = [
    "Full-stack web development",
    "REST API development",
    "Scalable backend architecture",
    "Modern frontend development with React",
    "Database design with PostgreSQL"
  ];

  const techStack = [
    "React", "JavaScript", "TypeScript", "Redux", "Node.js", 
    "Express", "PostgreSQL", "Supabase", "Firebase", "Tailwind CSS", "Git"
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6 tracking-tight">
              About Me
            </h2>
            <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
              I am a full-stack web developer passionate about building fast, scalable, and user-focused web applications. I enjoy working across the entire stack — from designing intuitive frontend interfaces to developing efficient backend systems and APIs.
            </p>
            
            <ul className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center text-[#1F2937] font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle2 className="text-[#4CAF7D] mr-3 shrink-0" size={20} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div>
              <h3 className="text-sm font-semibold text-[#1F2937] uppercase tracking-wider mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span 
                    key={index} 
                    className="px-4 py-2 bg-[#F9FAFB] text-[#1F2937] text-sm font-medium rounded-lg border border-gray-200 shadow-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column (Code/Tech Card) */}
          <motion.div 
            className="relative w-full max-w-md mx-auto lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            
            <div className="bg-[#1F2937] rounded-2xl p-6 md:p-8 shadow-xl border border-gray-800 text-gray-300 font-mono text-sm leading-relaxed overflow-hidden relative">
              <div className="flex items-center gap-2 mb-6 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-2 text-xs text-gray-500 font-sans">developer.js</div>
              </div>
              
              <div className="space-y-2 overflow-x-auto">
                <p><span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">developer</span> <span className="text-[#ff7b72]">=</span> {'{'}</p>
                <p className="pl-6"><span className="text-[#a5d6ff]">name</span>: <span className="text-[#a5d6ff]">'</span><span className="text-[#a5d6ff]">Nand Patel</span><span className="text-[#a5d6ff]">'</span>,</p>
                <p className="pl-6"><span className="text-[#a5d6ff]">role</span>: <span className="text-[#a5d6ff]">'</span><span className="text-[#a5d6ff]">Full-Stack Web Developer</span><span className="text-[#a5d6ff]">'</span>,</p>
                <p className="pl-6"><span className="text-[#a5d6ff]">skills</span>: [</p>
                <p className="pl-12 text-[#a5d6ff]">'React', 'Javascript', 'Typescript', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Supabase'</p>
                <p className="pl-6">],</p>
                <p className="pl-6"><span className="text-[#a5d6ff]">isAvailable</span>: <span className="text-[#79c0ff]">true</span>,</p>
                <p className="pl-6"><span className="text-[#d2a8ff]">buildApp</span>() {'{'}</p>
                <p className="pl-12"><span className="text-[#ff7b72]">return</span> <span className="text-[#a5d6ff]">'Fast, Scalable, & User-Focused'</span>;</p>
                <p className="pl-6">{'}'}</p>
                <p>{'};'}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Below */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 pt-10 border-t border-gray-100">
          {[
            { value: "5+", label: "Projects Built" },
            { value: "15+", label: "Technologies Used" },
            { value: "10+", label: "GitHub Repositories" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-[#F9FAFB] rounded-2xl border border-gray-100 transition-transform hover:-translate-y-1 duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="text-4xl font-bold text-[#4CAF7D] mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-[#6B7280]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
