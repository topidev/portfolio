import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { TooltipProvider } from '@/components/ui/tooltip'
import AppShell from '@/components/layout/AppShell'
import type { ReactNode } from 'react'
import { SidebarProvider } from './ui/sidebar'

type ProvidersProps = {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <SidebarProvider>
          <AppShell>
            {children}
          </AppShell>
        </SidebarProvider>
      </TooltipProvider>
    </NextThemesProvider>
  )
}