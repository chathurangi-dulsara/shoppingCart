import React from 'react';
import { useTheme } from '../Context/ThemeContext';
import { Moon, Sun } from 'lucide-react'; 

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const saveDarkMode = localStorage.getItem("theme") === "dark";
  const [isDarkMode, setIsDarkMode] = React.useState(saveDarkMode);

    React.useEffect(() => {
        const body= document.body;
        if(isDarkMode){
            body.classList.add("dark", "bg-gray-800");
            body.classList.remove("bg-white");
            document.querySelector("body").setAttribute("theme","dark");

        }
        else{
            body.classList.remove("dark", "bg-gray-800");
            body.classList.add("bg-white");
            document.querySelector("body").setAttribute("theme","light");

        }
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

  

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
