"use client"

import { useEffect, useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ClientSidebarTrigger() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="-ml-1" disabled>
        <Menu className="h-5 w-5" />
      </Button>
    )
  }

  return <SidebarTrigger className="-ml-1 cursor-pointer" />
}