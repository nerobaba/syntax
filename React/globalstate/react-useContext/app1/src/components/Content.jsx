import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function Content() {
  const { isDark } = useContext(ThemeContext)
  return (
    <div className="content" style={{ backgroundColor: isDark ? "black" : "white", color: isDark ? "white" : "black" }}>
      <p>have a good usecontext</p>
    </div>
  )
}
