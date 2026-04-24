import { useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { SidebarMenuButton } from '../ui/sidebar'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <SidebarMenuButton
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      tooltip="Cambiar tema"
      className="cursor-pointer shadow-[4px_4px_0px_0px_hsl(var(--foreground))]"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span>Cambiar tema</span>
    </SidebarMenuButton>
  )
}
