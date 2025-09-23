import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "Auto Preprocessing and Modeling",
      description:
        "Handles preprocessing like missing values and categorical variables, then builds classification/regression models."
    },
    {
      title: "Job Placement Prediction Using KNN",
      description:
        "Predicts job placement outcomes based on various factors using the K-Nearest Neighbors algorithm."
    },
    {
      title: "MNIST Digit Classification",
      description:
        "Trains a neural network to classify handwritten digits using Keras on the MNIST dataset."
    },
    {
      title: "Social Media Through HandGesture",
      description:
        "Uses OpenCV and cvzone HandTrackingModule to control social media access via hand gestures."
    }
  ];

  const [current, setCurrent] = useState(0);
  const total = projects.length;
  const intervalRef = useRef();

  // Auto-slide effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3500); // 3.5 seconds per slide for a slow effect
    return () => clearInterval(intervalRef.current);
  }, [total]);

  return (
    <section id="projects" className="w-full py-12 sm:py-16 px-4 sm:px-6" style={{ background: 'var(--gh-bg)' }}>
      <div className="max-w-screen-2xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center"
          style={{ color: 'var(--gh-link)' }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-xl overflow-hidden">
            <div style={{ display: 'flex', transition: 'transform 1s cubic-bezier(0.4,0,0.2,1)', transform: `translateX(-${current * 100}%)` }}>
              {projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  className="p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center min-h-[220px] border-2 w-full shrink-0"
                  style={{ background: 'var(--gh-card)', borderColor: 'var(--gh-border)' }}
                  initial={{ opacity: 0, scale: 0.95, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-3 text-center drop-shadow-lg" style={{ color: 'var(--gh-link)' }}>
                    {project.title}
                  </h3>
                  <p className="text-lg text-center mb-2" style={{ color: 'var(--gh-text)' }}>
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4 absolute left-1/2 -translate-x-1/2 bottom-2">
              {projects.map((_, idx) => (
                <span
                  key={idx}
                  className={`inline-block w-3 h-3 rounded-full transition-all duration-200 ${idx === current ? '' : ''}`}
                  style={{ background: idx === current ? 'var(--gh-link)' : 'var(--gh-border)' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

