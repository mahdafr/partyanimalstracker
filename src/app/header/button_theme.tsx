"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes"

export const ThemeButton = () => {
  const [mounted, setMounted] = useState(false)
  const [isActive, setIsActive] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect( () => {
    setMounted(true)
  }, [])

  if ( !mounted )
    return null

  const toggleTheme = () => {
    console.log("BUTT_THEME:\t" + theme)
    setTheme(theme === "light" ? "dark" : "light");
    setIsActive(!isActive);
  }

  return (
    <div >
      <Button variant="ghost" onClick={toggleTheme}>{(theme == "light") ? <Moon/> : <Sun/>}</Button>
    </div>
  )
}