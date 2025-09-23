import React from "react";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
  <section className="w-full py-12 sm:py-16 px-4 sm:px-6" style={{ background: 'var(--gh-bg)' }}>
  <div className="max-w-screen-2xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center"
          style={{ color: 'var(--gh-link)' }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

  <div className="space-y-8 sm:space-y-10">
          {/* TCS */}
          <motion.div
            className="rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition duration-200"
            style={{ background: 'var(--gh-card)', border: '1px solid var(--gh-border)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold" style={{ color: 'var(--gh-link)' }}>
              AWS Data Engineer – TCS
            </h3>
            <p className="text-sm mb-2" style={{ color: 'var(--gh-text)' }}>Pune, IN | Mar 2024 – Present</p>
            <ul className="list-disc ml-5 leading-relaxed" style={{ color: 'var(--gh-text)' }}>
              <li>Experience in SQL, Redshift, and Python</li>
              <li>Performed data validation, data loading, and schema analysis</li>
            </ul>
          </motion.div>

          {/* Linux World */}
          <motion.div
            className="rounded-xl shadow-md p-6"
            style={{ background: 'var(--gh-card)', border: '1px solid var(--gh-border)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold" style={{ color: 'var(--gh-link)' }}>
              MLOps Intern – Linux World Informatics
            </h3>
            <p className="text-sm mb-2" style={{ color: 'var(--gh-text)' }}>Jaipur, IN | Jun 2023 – Aug 2023</p>
            <ul className="list-disc ml-5 leading-relaxed" style={{ color: 'var(--gh-text)' }}>
              <li>Built AI/ML models for cloud computing</li>
              <li>Deployed with DevOps pipelines powered by ChatGPT API</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
