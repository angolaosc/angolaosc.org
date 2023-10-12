"use client"
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { SunDim, Moon } from "phosphor-react";

const ButtonDarkTheme: React.FC = () => {
  const [isDartMode, setIsDartMode] = useState(false);
  const { theme, setTheme } = useTheme();

  const toogleDarkMode = () => {
    setIsDartMode(!isDartMode);
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex" onClick={toogleDarkMode}>
      {isDartMode ? (
        <SunDim size={32} color="currentColor" />
      ) : (
        <Moon size={32} color="currentColor" />
      )}
    </div>
  )

}

export default ButtonDarkTheme;
