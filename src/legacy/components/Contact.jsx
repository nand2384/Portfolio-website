import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      if(response.ok) {
        resetForm();
        setIsSubmitting(false);
        toast.success("Message sent successfully!");
      } else {
        setIsSubmitting(false);
        toast.error("Message failed to send!");
      }
    } catch (error) {
      console.log("Error sending mail: ", error);
      toast.error("Message failed to send!");
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nand2384@gmail.com",
      link: "mailto:nand2384@gmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/nand-patel-2308np6409/",
      link: "https://www.linkedin.com/in/nand-patel-2308np6409/",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/nand2384",
      link: "https://github.com/nand2384",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Surat, Gujarat, India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4 tracking-tight">
            Let's Talk
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to build something meaningful.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Contact Information */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#1F2937]">
              Get in Touch
            </h3>
            <p className="text-[#6B7280] mb-10 leading-relaxed text-base">
              I'm currently available for freelance work and full-time opportunities.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="group flex items-center gap-5 p-4 bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-[#E5E7EB] group-hover:border-[#4CAF7D] transition-colors duration-300">
                    <info.icon className="text-[#4CAF7D]" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[#1F2937] text-sm mb-0.5">{info.title}</p>
                    {info.link ? (
                      <a
                         href={info.link}
                         target={info.link.startsWith('http') ? "_blank" : "_self"}
                         rel={info.link.startsWith('http') ? "noopener noreferrer" : ""}
                         className="text-[#6B7280] hover:text-[#4CAF7D] transition-colors text-sm font-medium"
                      >
                         {info.value}
                      </a>
                    ) : (
                      <p className="text-[#6B7280] text-sm font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="bg-white rounded-3xl border border-[#E5E7EB] p-8 sm:p-10 shadow-lg shadow-gray-100/50"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#1F2937] mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] text-[#1F2937] rounded-xl focus:ring-2 focus:ring-[#4CAF7D]/20 focus:border-[#4CAF7D] outline-none transition-all placeholder-gray-400 font-sans text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#1F2937] mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] text-[#1F2937] rounded-xl focus:ring-2 focus:ring-[#4CAF7D]/20 focus:border-[#4CAF7D] outline-none transition-all placeholder-gray-400 font-sans text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-[#1F2937] mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] text-[#1F2937] rounded-xl focus:ring-2 focus:ring-[#4CAF7D]/20 focus:border-[#4CAF7D] outline-none transition-all placeholder-gray-400 font-sans text-sm"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#1F2937] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] text-[#1F2937] rounded-xl focus:ring-2 focus:ring-[#4CAF7D]/20 focus:border-[#4CAF7D] outline-none transition-all resize-none placeholder-gray-400 text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4CAF7D] text-white px-8 py-4 rounded-xl hover:bg-[#3d8c64] transition-colors shadow-sm shadow-[#4CAF7D]/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed font-semibold text-sm group mt-2"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
