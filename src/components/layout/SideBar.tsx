"use client"

import { useEffect, useState } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import {
  Presentation,
  FolderCode,
  ShieldUser,
  Code,
  Mail,
  PanelLeftClose,
  PanelLeftOpen,
  Terminal,
  ChevronRight
} from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

const LINKS = [
  { id: "hero", label: "_HERO", icon: Presentation },
  { id: "projects", label: "_PROJECTS", icon: FolderCode },
  { id: "about", label: "_ABOUT_ME", icon: ShieldUser },
  { id: "stack", label: "_STACK", icon: Code },
  { id: "contact", label: "_CONTACT", icon: Mail },
]


export default function SideBar() {
  const { state, toggleSidebar } = useSidebar()
  const [active, setActive] = useState("hero")

  // Scroll spy para sección activa
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className={`
          border-b px-4 py-3
          ${state !== "expanded" ? 'px-2' : ''}
        `}>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Terminal className="h-4 w-4" />
          </div>
          {state === "expanded" && (
            <div>
              <p className="font-mono text-sm font-semibold leading-none text-primary">
                {"TOPIDEV"}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">Portfolio</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="py-6">
            {LINKS.map((link) => {
              const isActive = active === link.id
              const ItemIcon = link.icon

              return (
                <SidebarMenuItem key={link.id}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    tooltip={link.label}
                    className={`
                      font-mono transition-all group/item
                      ${isActive ? 'text-primary border border-primary' : ''}
                    `}
                  >
                    <a href={`#${link.id}`} className="flex relative items-center gap-2 w-full">
                      <ItemIcon
                        className={`
                          h-4 w-4 transition-all duration-300
                          ${state === "expanded" ? 'group-hover/item:opacity-0' : ''}
                        `}
                      />
                      <ChevronRight
                        className={`
                          h-4 w-4 opacity-0 block absolute left-2 -translate-y-1/2 top-1/2 transition-all duration-300 group-hover/item:ml-0 group-hover/item:opacity-100
                          ${state === "collapsed" ? 'hidden' : ''}
                        `}
                      />
                      <span
                        className={`
                          transition-all duration-300
                        `}
                      >
                        {link.label}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-2 space-y-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <ThemeToggle />
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={toggleSidebar}
              tooltip={state === "collapsed" ? "Expandir" : "Colapsar"}
              className="shadow-[4px_4px_0px_0px_hsl(var(--foreground))] cursor-pointer"
            >
              {state === "collapsed" ? (
                <PanelLeftOpen className="h-4 w-4" />
              ) : (
                <PanelLeftClose className="h-4 w-4" />
              )}
              <span>{state === "collapsed" ? "Expandir" : "Colapsar"}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}