"use client"
import React, { useState } from "react"
import { useTheme } from "next-themes"
interface NavItem {
  label: string
  page: string
}
import { RiMoonFill, RiSunLine } from "react-icons/ri"

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
]
const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="w-full p-4 mx-auto light:bg-white shadow-lg fixed z-50 top-0 dark:bg-slate-600">
      <div className=" justify-between flex items-center">
        <div>
          <div>
            <h2 className="text-2xl font-bold">Junye X</h2>
          </div>
        </div>

        <div className="flex md:gap-4 items-center">
          {NAV_ITEMS.map((item, index) => {
            return <a key={index}>{item.label}</a>
          })}
          {currentTheme === "dark" ? (
            <button
              className=" bg-slate-900 p-3 rounded-xl"
              onClick={() => setTheme("light")}>
              <RiSunLine />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-300 p-3 rounded-xl">
              <RiMoonFill />
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
