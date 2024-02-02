"use client";

import { useTheme } from "next-themes";
import { SunIcon , MoonIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from "react";

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  },[])

  if(!mounted) {
    return null;
  }
  const {theme, setTheme} = useTheme();
  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light'): setTheme('dark')
  }
  return (
    <button
    aria-label="Toogle Dark Mode"
    type="button"
    className="flex items-center justify-center rounded-lg p-2 transition-colors"
    onClick={toggleTheme}>
      {theme === 'dark'? (<SunIcon className="h-5 w-5 text-orange-300"/>) :
      (<MoonIcon className="h-5 w-5 text-slate-800"/>)
      }
    </button>
  )
}
