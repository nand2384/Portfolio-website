import { 
  Monitor, 
  Server, 
  Wrench, 
  Layers, 
  FileCode,
  FileCode2,
  Workflow,
  Box, 
  Layout, 
  Terminal, 
  Database, 
  GitBranch, 
  Cloud,
  CloudLightning,
  Code,
  Network,
  KeyRound,
  SendHorizontal,
  Github
} from "lucide-react";
import { motion } from "motion/react";

export function Skills() {
  const mainTech = [
    { name: "React", icon: Layers },
    { name: "JavaScript", icon: FileCode },
    { name: "TypeScript", icon: FileCode2 },
    { name: "Redux", icon: Workflow},
    // { name: "Next.js", icon: Box },
    { name: "Node.js", icon: Terminal },
    { name: "Express", icon: Server },
    { name: "REST APIs", icon: Network},
    { name: "JWT Auth", icon: KeyRound },
    { name: "Postman", icon: SendHorizontal },
    { name: "PostgreSQL", icon: Database },
    { name: "Supabase", icon: Cloud },
    { name: "Firebase", icon: CloudLightning},
    { name: "Tailwind CSS", icon: Layout },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github }
  ];

const expertiseCategories = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and performant user interfaces using modern frameworks, state management, and component-driven architecture.",
    icon: Monitor,
    tech: "React, JavaScript, TypeScript, Redux, Tailwind CSS"
  },
  {
    title: "Backend Development",
    description:
      "Developing scalable backend services and REST APIs with secure authentication and efficient database integration.",
    icon: Server,
    tech: "Node.js, Express, REST APIs, JWT Authentication, PostgreSQL, Supabase, Firebase"
  },
  {
    title: "Tools & Workflow",
    description:
      "Tools used for version control, API testing, and maintaining an efficient development workflow.",
    icon: Wrench,
    tech: "Git, GitHub, Postman"
  }
];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 bg-[#F9FAFB] relative border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4 tracking-tight">
            Tech Stack & Expertise
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Technologies and tools I use to design and build modern web applications.
          </p>
        </motion.div>

        {/* Top Area: Tech Grid */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {mainTech.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#4CAF7D] hover:shadow-[0_4px_20px_rgba(76,175,125,0.15)] cursor-default"
              >
                <div className="text-gray-400 group-hover:text-[#4CAF7D] transition-colors duration-300">
                  <tech.icon size={32} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-[#1F2937] group-hover:text-[#4CAF7D] transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Area: Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-[0_8px_30px_rgba(76,175,125,0.1)] hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col h-full group"
            >
              <div className="w-12 h-12 bg-[#F9FAFB] border border-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:border-[#4CAF7D] transition-colors duration-300">
                <category.icon className="text-[#4CAF7D]" size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-[#1F2937]">
                {category.title}
              </h3>
              
              <p className="text-sm text-[#6B7280] mb-6 leading-relaxed grow">
                {category.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="flex items-start gap-2">
                  <Code size={16} className="text-[#4CAF7D] mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-[#1F2937] leading-relaxed">
                    {category.tech}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
