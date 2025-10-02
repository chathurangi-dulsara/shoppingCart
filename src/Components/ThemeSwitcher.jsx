// Components/ThemeSwitcher.jsx
import React from 'react';
import { useTheme } from '../Context/ThemeContext';
import { Moon, Sun } from 'lucide-react'; // optional icons from lucide-react

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center gap-2 px-3 py-2 rounded-full shadow-sm border transition-all duration-300
        ${theme === 'light'
          ? 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-300'
          : 'bg-gray-800 text-yellow-200 hover:bg-gray-700 border-gray-700'
        }`}
    >
      {theme === 'light' ? (
        <>
          <Moon size={18} />
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <Sun size={18} />
          <span>Light Mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeSwitcher;
