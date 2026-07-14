"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out through any of these platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "v.varun2355@gmail.com", href: "mailto:v.varun2355@gmail.com", color: "text-blue-400" },
              { icon: Phone, label: "Phone", value: "+91 93986 92826", href: "tel:+919398692826", color: "text-green-400" },
              { icon: Github, label: "GitHub", value: "viswabrahmanavarun", href: "https://github.com/viswabrahmanavarun", color: "text-white" },
              { icon: Linkedin, label: "LinkedIn", value: "varun-viswabrahmana", href: "http://www.linkedin.com/in/varun-viswabrahmana-509217344", color: "text-blue-600" },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 glass-card group hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`p-4 rounded-xl bg-white/5 group-hover:scale-110 transition-transform ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-lg font-medium text-white/90 group-hover:text-blue-400 transition-colors">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form Placeholder / Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Send size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-6">Let's build something amazing together!</h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              I am currently available for freelance work and full-time positions. 
              If you have a project that needs a creative and technical touch, don't hesitate to contact me.
            </p>
            <a
              href="mailto:v.varun2355@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
