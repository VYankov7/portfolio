import React, { useState, useEffect } from "react";
import { RxSun } from "react-icons/rx";
import { BsMoon } from "react-icons/bs";

//DarkMode
const LightButton = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={handleThemeSwitch}>
      {theme === "dark" ? (
        <RxSun className="hover:text-yellow-300 text-xl duration-200" />
      ) : (
        <BsMoon className="hover:text-gray-500 text-xl duration-200 " />
      )}
    </button>
  );
};
export default LightButton;
