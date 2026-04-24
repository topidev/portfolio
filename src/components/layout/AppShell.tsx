"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import SideBar from "./SideBar"

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SideBar />

      <main className="transition-all duration-300 lg:ml-[80px] xl:ml-[120px] w-full">
        {children}
      </main>
    </SidebarProvider>
  )
}