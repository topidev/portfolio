"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, ChevronRight, Maximize2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer"
import { FaGithub } from "react-icons/fa6"
import { Dialog, DialogContent } from "../ui/dialog"

type Project = {
  id: string
  title: string
  hook: string
  description: string
  img: string
  linkGithub: string
  linkVercel: string
  stack: string[]
}

// Placeholder - reemplaza con tus proyectos
const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Veterinaria",
    hook: "Reservaciones y seguimiento clínico",
    description: "Sistema de registro, consulta, mensajes y reservaciones para una Veterinaria",
    img: "/images/vet.png",
    linkGithub: "https://github.com/topidev/veterinaria",
    linkVercel: "https://veterinaria-seven-ruby.vercel.app/",
    stack: ["Next.js", "Supabase", "Shadc", "React"]
  },
  {
    id: "2",
    title: "Florería",
    hook: "E-commerce para Florería",
    description: "Pagina web orientada a compras, persistencia de datos, carrito, login.",
    img: "/images/dessetBloom.png",
    linkGithub: "https://github.com/topidev/floreria-la-paz",
    linkVercel: "https://floreria-la-paz.vercel.app/",
    stack: ["React", "Firebase", "Stripe", "Zustand"]
  },
  {
    id: "3",
    title: "To-Do List",
    hook: "Drag & Drop - Trello-Alike",
    description: "TodoList con indicador de urgencia y formularios compartidos para creación de actividades",
    img: "/images/flowTask.png",
    linkGithub: "https://github.com/topidev/todo-list-astro",
    linkVercel: "https://todo-list-astro-chi.vercel.app/",
    stack: ["Astro", "FireBase", "TypeScript", "Shadcn"]
  },
  {
    id: "4",
    title: "SEDA",
    hook: "Sistema Escolar de Alumnos (CRUD)",
    description: "CRUD Básico para Profesores. Manejo de escuelas, materias, alumnos y evaluaciones",
    img: "/images/SEDA.png",
    linkGithub: "https://github.com/topidev/SEDA",
    linkVercel: "https://seda-frontend.vercel.app/login",
    stack: ["TypeScript", "NestJS", "Next.js", "Prisma"]
  },
]

function ProjectCard({ project, onOpen, onImageClick }:
  {
    project: Project;
    onOpen: () => void;
    onImageClick: () => void;
  }) {
  return (
    <>
      {/* Desktop Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="group hidden md:block"
      >
        <div
          className="
            relative bg-card border-2 border-border
            transition-all duration-200 ease-out
            hover:-translate-x-1 hover:-translate-y-1
            hover:shadow-[6px_6px_0px_0px_hsl(var(--foreground))]
            shadow-[4px_4px_0px_0px_hsl(var(--foreground))]
            overflow-hidden
          "
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
          }}
        >
          <button
            onClick={onImageClick}
            className="relative cursor-pointer aspect-video overflow-hidden border-b-2 border-border"
          >
            <img
              src={project.img}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="
              absolute inset-0 bg-black/0 group-hover/img:bg-black/20
              transition-all duration-200 flex items-center justify-center
              opacity-0 group-hover/img:opacity-100
            ">
              <Maximize2 className="h-8 w-8 text-white drop-shadow-lg" />
            </div>
          </button>

          <div className="p-5 space-y-3 transition-all duration-300 group-hover:bg-card-contrast">
            <div>
              <h3 className="font-mono transition-colors duration-300  text-lg font-bold text-foreground mb-1 group-hover:text-card">
                {project.title}
              </h3>
              <p className="text-sm transition-colors duration-300  text-muted-foreground line-clamp-1 group-hover:text-card">
                {project.hook}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, 3).map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="font-mono text- px-2 py-0.5 border-border transition-colors duration-300 group-hover:text-card"
                >
                  {tech}
                </Badge>
              ))}
              {project.stack.length > 3 && (
                <Badge variant="outline" className="font-mono text- px-2 py-0.5 transition-colors duration-300 group-hover:text-card">
                  +{project.stack.length - 3}
                </Badge>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 font-mono text-xs border-border bg-card"
                asChild
              >
                <a href={project.linkGithub} target="_blank" rel="noopener">
                  <FaGithub className="h-3.5 w-3.5 mr-1.5" />
                  Code
                </a>
              </Button>
              <Button
                size="sm"
                className="flex-1 font-mono text-xs"
                asChild
              >
                <a
                  href={project.linkVercel}
                  target="_blank"
                  rel="noopener"
                  className={`${project.linkVercel.trim() === "" ? 'pointer-events-none opacity-30' : ''}`}
                >
                  <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                  Live
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile List Item - Tap to open drawer */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        onClick={onOpen}
        className="
          md:hidden w-full text-left
          bg-card border-2 border-border
          p-4 transition-all duration-200
          active:scale-[0.98] active:shadow-[2px_2px_0px_0px_hsl(var(--foreground))]
          shadow-[4px_4px_0px_0px_hsl(var(--foreground))]
          flex items-center gap-3
        "
        style={{
          clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
        }}
      >
        <img
          src={project.img}
          alt={project.title}
          className="h-16 w-16 object-cover border-2 border-border shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-mono text-sm font-bold text-foreground truncate">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
            {project.hook}
          </p>
          <div className="flex gap-1 mt-2">
            {project.stack.slice(0, 2).map((tech) => (
              <Badge key={tech} variant="outline" className="text- px-1.5 py-0">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
      </motion.button>
    </>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <section id="projects" className="py-24 px-4 md:px-2 lg:px-4">
      <div className="max-w- mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-mono text-primary mb-4">
            {"// PROJECTS"}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-foreground">
            Trabajos Destacados
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Selección de proyectos donde aplico arquitectura limpia, performance y UX.
          </p>
        </motion.div>

        {/* Grid Desktop | Lista Mobile */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setSelectedProject(project)}
              onImageClick={() => setLightboxImage(project.img)}
            />
          ))}
        </div>
      </div>

      {/* Mobile Drawer - Bottom Sheet */}
      <Drawer open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DrawerContent className="bg-card border-t-2 border-border">
          {selectedProject && (
            <div className="mx-auto w-full max-w-2xl">
              <DrawerHeader className="text-left">
                <DrawerTitle className="font-mono text-xl">
                  {selectedProject.title}
                </DrawerTitle>
                <DrawerDescription className="text-sm">
                  {selectedProject.description}
                </DrawerDescription>
              </DrawerHeader>

              <div className="px-4 pb-6 space-y-4">
                {/* Imagen clickeable en mobile */}
                <button
                  onClick={() => setLightboxImage(selectedProject.img)}
                  className="relative cursor-pointer aspect-video overflow-hidden border-2 border-border w-full group/img"
                >
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="
                    absolute inset-0 bg-black/0 group-active/img:bg-black/20
                    transition-all duration-200 flex items-center justify-center
                  ">
                    <Maximize2 className="h-8 w-8 text-white drop-shadow-lg" />
                  </div>
                </button>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="font-mono text-xs border-border"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    className="flex-1 font-mono border-border"
                    asChild
                  >
                    <a href={selectedProject.linkGithub} target="_blank" rel="noopener">
                      <FaGithub className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  <Button
                    className="flex-1 font-mono"
                    asChild>
                    <a
                      href={selectedProject.linkVercel}
                      target="_blank"
                      rel="noopener"
                      className={`${selectedProject.linkVercel.trim() === "" ? 'pointer-events-none opacity-30' : ''}`}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Live
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DrawerContent>
      </Drawer>
      {/* Lightbox Dialog - Desktop y Mobile */}
      <Dialog open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
        <DialogContent className="
          max-w-[90vw]! w-[90vw]! h-auto! p-0 bg-transparent border-0 shadow-none
          [&>button]:hidden
          flex items-center justify-center
        ">
          <div className="relative w-full h-auto flex items-center justify-center">
            <img
              src={lightboxImage || ""}
              alt="Project preview"
              className="
                max-w-full max-h-full w-auto h-auto object-contain
                border-4 border-border bg-card
                shadow-[8px_8px_0px_0px_hsl(var(--foreground))]
              "
            // style={{
            //   clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)",
            // }}
            />
            <Button
              size="icon"
              variant="outline"
              onClick={() => setLightboxImage(null)}
              className="                
                absolute -top-3 -right-3 h-10 w-10 rounded-full
                border-2 border-border cursor-pointer
                bg-card
                shadow-[4px_4px_0px_0px_hsl(var(--foreground))]
                hover:-translate-x-0.5 hover:-translate-y-0.5
                hover:shadow-[5px_5px_0px_0px_hsl(var(--foreground))]
              "
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}