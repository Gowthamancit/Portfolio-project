import { ThemeProvider } from './context/ThemeContext';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  return (
    <ThemeProvider>
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>

      <main className="flex flex-col gap-32 px-4 pb-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <Hero />
        <About />
        <TechStack />
        <Contact />
      </main>

      <footer className="text-center py-6 text-sm dark:text-gray-400">
        © {new Date().getFullYear()} John Doe. All rights reserved.
      </footer>
    </ThemeProvider>
  );
}
