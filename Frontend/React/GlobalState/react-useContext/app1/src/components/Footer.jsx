import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function Footer() {
  const toggleTheme = () => {
    setIsDark(!isDark)
  }
  const { isDark, setIsDark } = useContext(ThemeContext)
  return (
    <footer className="footer" style={{ backgroundColor: isDark ? "black" : "lightgray" }}>
      <button className="button" onClick={toggleTheme}>
        Dark Mode
      </button>
    </footer>
  )
}
