"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Education
        </motion.h2>

        <div className="relative border-l-2 border-blue-200 pl-8 space-y-12">
          {/* VIT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="absolute -left-[9px] top-1 h-4 w-4 bg-blue-600 rounded-full" />
            <h3 className="text-lg font-semibold">
              Integrated M.Tech – Software Engineering
            </h3>
            <p className="text-sm text-gray-600">
              Vellore Institute of Technology (2020 – 2025)
            </p>
            <p className="mt-2 text-gray-700 text-sm">
              Focused on full-stack development, machine learning, data analysis,
              and final-year research using Graph Neural Networks.
            </p>
          </motion.div>

          {/* Final Year Project */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="absolute -left-[9px] top-1 h-4 w-4 bg-blue-600 rounded-full" />
            <h3 className="text-lg font-semibold">
              Final Year Project
            </h3>
            <p className="text-sm text-gray-600">
              Educational Geodemographic Classification using GNNs
            </p>
            <p className="mt-2 text-gray-700 text-sm">
              Applied Graph Neural Networks to model spatial and socioeconomic
              relationships for educational data classification.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
