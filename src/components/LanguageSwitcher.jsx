import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa"; // Globe icon from react-icons
import { gsap } from "gsap"; // GSAP for animations
import { useTranslation } from "react-i18next";
const LanguageSwitcher = () => {
  const [t, i18n] = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = ["English", "German", "French"];

  // GSAP animation for opening/closing dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    gsap.to(".dropdown", {
      duration: 0.3,
      opacity: isOpen ? 0 : 1,
      y: isOpen ? -10 : 0, // Slight vertical movement for smooth effect
      display: isOpen ? "none" : "block",
    });
  };

  // Handle language selection
  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    if (language === "English") {
      i18n.changeLanguage("en");
    } else if (language === "German") {
      i18n.changeLanguage("de");
    } else {
      i18n.changeLanguage("fr");
    }
    toggleDropdown();
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 bg-black
         text-white rounded-full hover:bg-gray-800 transition-all duration-200"
      >
        <FaGlobe className="mr-2 text-[15px]" />
        <span className="text-[10px]">{selectedLanguage}</span>
      </button>

      <div
        className={`dropdown absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md overflow-hidden transform transition-all duration-300 ${
          isOpen ? "block opacity-100" : "hidden opacity-0"
        }`}
      >
        {languages.map((language, index) => (
          <button
            key={index}
            onClick={() => changeLanguage(language)}
            className="w-full text-left text-sm hover:bg-gray-200 transition-colors duration-150"
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
