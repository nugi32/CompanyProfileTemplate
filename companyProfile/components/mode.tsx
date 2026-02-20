"use client"

import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const isDark = theme === "dark"

  const handleChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }

  return (
<div className="flex items-center space-x-2">
  <Switch
    id="dark-mode"
    checked={isDark}
    onCheckedChange={handleChange}
    aria-label={isDark ? "Dark mode" : "Light mode"}
  />
</div>
  )
}
