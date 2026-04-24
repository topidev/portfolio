"use client"

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SideBar from "./SideBar"
import { Separator } from "../ui/separator"
import { ClientSidebarTrigger } from "./ClientSidebarTrigger"

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SideBar />
      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b px-4 sticky top-0 z-40 bg-background/80 backdrop-blur-sm">
          <ClientSidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
        </header>
        <main className="flex-1  w-full max-w-[1500px] mx-auto">
          {children}
        </main>
      </SidebarInset>
      {/* <main className="transition-all duration-300 lg:ml-[80px] xl:ml-[120px] w-full">
        {children}
      </main> */}
    </SidebarProvider>
  )
}