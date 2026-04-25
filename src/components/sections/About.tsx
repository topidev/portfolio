'use client'

import { motion } from "framer-motion"
import { Zap, Database, CreditCard, Gauge, Terminal } from "lucide-react"

const SKILLS = [
  {
    icon: Zap,
    title: "Arquitectura y Escalabilidad",
    description: "Diseño de frontends modulares con React/Next.js y gestión de estado eficiente con Zustand, asegurando que la interfaz se mantenga rápida bajo cualquier carga."
  },
  {
    icon: Database,
    title: "Ecosistemas de Datos y Backend",
    description: "Implementación de soluciones integrales con Firebase y Supabase, incluyendo el diseño de reglas de seguridad, migraciones de datos y arquitecturas serverless."
  },
  {
    icon: CreditCard,
    title: "Flujos de Conversión y Negocio",
    description: "Integración de pasarelas de pago (Stripe) y automatización de procesos para e-commerce y sistemas de gestión, garantizando transacciones seguras y flujos de usuario intuitivos."
  },
  {
    icon: Gauge,
    title: "Rendimiento Web",
    description: "Optimización de Core Web Vitals mediante el uso de herramientas modernas como Astro y Tailwind CSS para maximizar el SEO y la retención de usuarios."
  }
]

const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Astro",
  "Zustand", "Firebase", "Supabase", "Stripe", "Zod",
  "Shadcn", "APIs REST", "Vercel", "Git"
]

export default function About() {
  return (
    <section id="about" className="py-15 mt-40 px-4 md:px-2 lg:px-4 bg-muted/30">
      <div className="mx-auto max-w[1500px]">
        <motion.div initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 text-sm font-mono text-primary mb-4">
            {"// ABOUT_ME"}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-foreground mb-4">
            Software Engineer | Full Stack Problem Solver
          </h2>
        </motion.div>
        <div className=" flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div
              className="bg-card border-2 border-border p-6 md:p-8 shadow-[6px_6px_0px_0px_hsl(var(--foreground))] relative"
              style={{
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)"
              }}
            >
              <Terminal className="h-8 w-8 text-primary mb-4" />
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Transformo requerimientos complejos en productos digitales de alto rendimiento.
                Mi enfoque está en la resolución técnica proactiva y en la creación de arquitecturas
                que permitan escalar sin fricciones.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
                Con una base sólida en ingeniería y experiencia liderando implementaciones críticas,
                me especializo en cerrar la brecha entre una necesidad de negocio y una solución
                tecnológica robusta.
              </p>
            </div>
            <div className="overflow-hidden border-y-2 border-border py-4 bg-muted/50">
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex gap-8 whitespace-nowrap"
              >
                {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                  <span key={i} className="font-mono text-sm text-muted-foreground">
                    {tech} <span className="text-primary">→</span>
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* ¿Qué problemas resuelvo? */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold font-mone text-foreground mb-6">
              ¿Qué problemas resuelvo?
            </h3>
            {SKILLS.map((skill, index) => {
              const Icon = skill.icon

              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.15 }}
                  className="
                    group bg-card border-2 border-border p-5
                    transition-all duration-200
                    hover:-translate-x-1 hover:-translate-y-1
                    hover:shadow-[5px_5px_0px_0px_hsl(var(--foreground))]
                    shadow-[3px_3px_0px_0px_hsl(var(--foreground))]
                  "
                >
                  <div className="flex gap-4">
                    <div
                      className="
                        shrink-0 h-12 w-12 flex items-center justify-center
                        bg-primary/10 border-2 border-primary 
                        group-hover:bg-primary group-hover:text-primary-foreground
                        transition-all duration-200
                    ">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-mono text-base font-bold text-foreground mb-2">
                        {skill.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}