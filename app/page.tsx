'use client';

import { motion } from 'framer-motion';

import Hero from '@/components/Hero/Hero';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Certificates from '@/components/Certificates/Certificates';
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero – no delay, strong entrance */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        id="hero"
      >
        <Hero />
      </motion.section>
            {/* About */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="section"
      >
        <About />
      </motion.section>
      {/* Skills */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Skills />
      </motion.section>

      {/* Projects */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Projects />
      </motion.section>
       <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Certificates />
      </motion.section>
      {/* Contact */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="section"
        id="contact"
      >
        <Contact />
      </motion.section>
    </main>
  );
}
