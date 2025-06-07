import { motion } from 'framer-motion';
import HtmlLogo from '../assets/html.svg';
import CssLogo from '../assets/css.svg';
import JsLogo from '../assets/javascript.svg';
import ReactLogo from '../assets/react.svg';
import TailwindLogo from '../assets/tailwind.svg';

const logos = [
  { src: HtmlLogo, alt: 'HTML5' },
  { src: CssLogo, alt: 'CSS3' },
  { src: JsLogo, alt: 'JavaScript' },
  { src: ReactLogo, alt: 'React' },
  { src: TailwindLogo, alt: 'Tailwind CSS' },
];

export default function TechStack() {
  return (
    <section id="tech" className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">Tech&nbsp;Stack</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {logos.map(({ src, alt }) => (
          <motion.img
            key={alt}
            src={src}
            alt={alt}
            className="w-16 h-16"
            whileHover={{ scale: 1.25, rotate: 8 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        ))}
      </div>
    </section>
  );
}
