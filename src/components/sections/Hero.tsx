"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiSupabase,
  SiAstro,
  SiFirebase,
  SiStripe
} from "react-icons/si"

const TECH_STACK = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  // { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Supabase", icon: SiSupabase },
  { name: "Astro", icon: SiAstro },
  { name: "Firebase", icon: SiFirebase },
  // { name: "Stripe", icon: SiStripe },
]

function Hexagon({ tech, index, className }: { tech: typeof TECH_STACK[0]; index: number; className?: string; }) {
  const Icon = tech.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ delay: index * 0.08, duration: 0.4, type: "spring" }}
      className={`group relative ${className}`}
    >
      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 2.5 + index * 0.15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          relative flex h-16 w-16 items-center justify-center
          bg-card border-2 border-border
          transition-all duration-200 ease-out
          md:h-26 md:w-26 
          
          hover:-translate-x-1 hover:-translate-y-1
          hover:shadow-[5px_5px_0px_0px_hsl(var(--primary))]
          hover:z-30
          hover:scale-105
          active:translate-x-0 active:translate-y-0
          
          active:shadow-[2px_2px_0px_0px_hsl(var(--primary))]
        `}
        style={{
          clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
        }}
      >
        <Icon className="h-6 w-6 md:h-8 md:w-8 duration-200 transition-all text-muted-foreground group-hover:text-primary group-hover:scale-110" />

      </motion.div>
      {/* Tooltip */}
      <div className="
        absolute -top-8 left-1/2 -translate-x-1/2
        whitespace-nowrap rounded-md bg-popover px-2 py-1
        text-xs font-mono text-popover-foreground
        opacity-0 scale-95 transition-all duration-200
        group-hover:opacity-100 group-hover:scale-100
        pointer-events-none 
        border border-border shadow-lg z-50
      ">
        {tech.name}
        <div className="
          absolute left-1/2 top-full -translate-x-1/2
          border-4 border-transparent border-t-popover 
        " />
      </div>
    </motion.div>
  )
}

export default function HeroShot() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Background geométrico con variables CSS */}
      <div className="absolute inset-0 -z-10">
        <div className="
          absolute inset-0
          bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
          bg-size-[4rem_4rem]
          mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]
        " />
        <div className="
          absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full
          bg-primary/20 blur-[100px]
          md:h-[500px] md:w-[500px]
        " />
      </div>

      <div className="container mx-auto flex min-h-screen items-center px-4 py-20 md:px-6">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Texto + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="mb-4 inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-mono text-primary">
              {"// DESARROLLADOR_FULLSTACK"}
            </div>

            <h1 className="
              mb-6 text-4xl font-bold tracking-tight text-foreground
              md:text-5xl lg:text-6xl xl:text-7xl
            ">
              Topitzin
              <span className="block text-primary">{"> Dev"}</span>
            </h1>

            <p className="
              mb-8 max-w-md text-base text-muted-foreground
              md:text-lg lg:max-w-lg
            ">
              Construyo experiencias web modernas con React, Next.js y TypeScript.
              Enfocado en performance, accesibilidad y código limpio.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="
                  group font-mono
                  shadow-[4px_4px_0px_0px_hsl(var(--primary))]
                  hover:-translate-x-1 hover:-translate-y-1
                  hover:shadow-[6px_6px_0px_0px_hsl(var(--primary))]
                  transition-all
                "
                asChild
              >
                <a href="#contact">
                  Contactar
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="border-border" asChild>
                  <a href="https://github.com/topidev" target="_blank" rel="noopener">
                    <FaGithub className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="border-border" asChild>
                  <a href="https://www.linkedin.com/in/topitzin-marquez-194651321/" target="_blank" rel="noopener">
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="border-border" asChild>
                  <a href="mailto:tu@email.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Panal Real: 1 centro + 6 alrededor */}
          <motion.div className="hidden lg:flex items-center justify-center">
            <div className="flex flex-col items-center gap-.5">
              {/* Fila 1: 2 items */}
              <div className="flex gap-1">
                <Hexagon tech={TECH_STACK[1]} index={1} />
                <Hexagon tech={TECH_STACK[2]} index={2} />
              </div>

              {/* Fila 2: 3 items - centro offset */}
              <div className="flex gap-1 -mt-[1.125rem] md:-mt-[1.4rem]">
                <Hexagon tech={TECH_STACK[5]} index={5} />
                <Hexagon tech={TECH_STACK[0]} index={0} /> {/* Centro */}
                <Hexagon tech={TECH_STACK[3]} index={3} />
              </div>

              {/* Fila 3: 2 items */}
              <div className="flex gap-1 -mt-[1.125rem] md:-mt-[1.4rem]">
                <Hexagon tech={TECH_STACK[6]} index={6} />
                <Hexagon tech={TECH_STACK[4]} index={4} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="h-10 w-6 rounded-full border-2 border-border">
          <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-muted-foreground" />
        </div>
      </motion.div>
    </section>
  )
}