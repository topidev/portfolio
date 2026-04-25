import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { TooltipProvider } from '@/components/ui/tooltip'
import AppShell from '@/components/layout/AppShell'
import type { ReactNode } from 'react'
import { SidebarProvider } from './ui/sidebar'
import { Toaster } from './ui/sonner'

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
            <Toaster richColors position='bottom-right' />
          </AppShell>
        </SidebarProvider>
      </TooltipProvider>
    </NextThemesProvider>
  )
}