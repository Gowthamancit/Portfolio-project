import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto grid md:grid-cols-2 gap-10 items-center"
    >
      {/* Avatar */}
      <motion.img
        src={profilePic}
        alt="Profile"
        className="w-48 h-48 rounded-full object-cover mx-auto md:mx-0 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />

      {/* Copy */}
      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed mb-4">
          I’m a passionate developer who loves transforming complex problems
          into intuitive digital products.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Strong problem-solving mindset</li>
          <li>Great communication & teamwork</li>
          <li>Focus on performance & accessibility</li>
        </ul>
      </div>
    </section>
  );
}
