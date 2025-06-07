import { motion } from 'framer-motion';
import resume from '../assets/resume.pdf';

export default function Hero() {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col items-center text-center pt-8"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-6xl font-extrabold mb-4"
      >
        Hi, I’m <span className="text-indigo-600">JOHN&nbsp;DOE</span>
      </motion.h1>

      <p className="max-w-xl text-lg sm:text-xl mb-8">
        Front-End&nbsp;Developer crafting fast, accessible & delightful web
        experiences.
      </p>

      <div className="flex gap-4">
        <a
          href={resume}
          download
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
