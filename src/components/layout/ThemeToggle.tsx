import { useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { SidebarMenuButton } from '../ui/sidebar'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <SidebarMenuButton
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      tooltip="Cambiar tema"
      className="relative flex items-center justify-start overflow-hidden cursor-pointer shadow-[4px_4px_0px_0px_hsl(var(--foreground))]"
    >
      <Sun className="h-5 w-5 theme-toggle-icon sun-icon" />
      <Moon className="absolute h-5 w-5 theme-toggle-icon moon-icon" />
      <span>Cambiar tema</span>
    </SidebarMenuButton>
  )
}
