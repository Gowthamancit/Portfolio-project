import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition cursor-pointer"
      aria-label="Toggle Dark Mode"
      title="Toggle Light/Dark Mode"
      type="button"
    >
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
