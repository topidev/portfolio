"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Loader2, CheckCircle2, XCircle, Mail, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactSchema } from "@/lib/validations/contact"
import { toast } from "sonner"

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  })

  const messageLength = watch("message")?.length || 0

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error("Error al enviar")

      toast.success("¡Mensaje enviado! Te responderé pronto.")
      reset()
    } catch (error) {
      toast.error("Hubo un error. Intenta de nuevo o escríbeme directo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w- mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-mono text-primary mb-4">
            {"// CONTACT"}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-foreground mb-4">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cuéntame sobre tu proyecto. Respondo en menos de 24 horas.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="
            bg-card border-2 border-border p-6 md:p-8
            shadow-[6px_6px_0px_0px_hsl(var(--foreground))]
            space-y-6
          "
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
          }}
        >
          {/* Nombre */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-mono font-semibold text-foreground">
              <User className="h-4 w-4 text-primary" />
              Nombre
            </label>
            <div className="relative">
              <Input
                {...register("name")}
                placeholder="John Doe"
                className={`
                  bg-background border-2 font-mono
                  transition-all duration-200
                  ${errors.name
                    ? "border-destructive focus-visible:ring-destructive"
                    : touchedFields.name && !errors.name
                      ? "border-primary focus-visible:ring-primary"
                      : "border-border"
                  }
                `}
              />
              {touchedFields.name && !errors.name && (
                <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
              )}
            </div>
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-xs text-destructive font-mono"
                >
                  {errors.name.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-mono font-semibold text-foreground">
              <Mail className="h-4 w-4 text-primary" />
              Email
            </label>
            <div className="relative">
              <Input
                {...register("email")}
                type="email"
                placeholder="john@empresa.com"
                className={`
                  bg-background border-2 font-mono
                  transition-all duration-200
                  ${errors.email
                    ? "border-destructive focus-visible:ring-destructive"
                    : touchedFields.email && !errors.email
                      ? "border-primary focus-visible:ring-primary"
                      : "border-border"
                  }
                `}
              />
              {touchedFields.email && !errors.email && (
                <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
              )}
            </div>
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-xs text-destructive font-mono"
                >
                  {errors.email.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Mensaje */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-mono font-semibold text-foreground">
              <MessageSquare className="h-4 w-4 text-primary" />
              Mensaje
              <span className="ml-auto text-xs text-muted-foreground font-normal">
                {messageLength}/500
              </span>
            </label>
            <div className="relative">
              <Textarea
                {...register("message")}
                placeholder="Cuéntame sobre tu proyecto, stack, timeline..."
                rows={6}
                className={`
                  bg-background border-2 font-mono resize-none
                  transition-all duration-200
                  ${errors.message
                    ? "border-destructive focus-visible:ring-destructive"
                    : touchedFields.message && !errors.message
                      ? "border-primary focus-visible:ring-primary"
                      : "border-border"
                  }
                `}
              />
            </div>
            <AnimatePresence>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-xs text-destructive font-mono"
                >
                  {errors.message.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="
              w-full h-12 font-mono font-bold text-base
              bg-primary text-primary-foreground
              border-2 border-primary cursor-pointer
              shadow-[4px_4px_0px_0px_hsl(var(--foreground))]
              hover:-translate-x-0.5 hover:-translate-y-0.5
              hover:shadow-[5px_5px_0px_0px_hsl(var(--foreground))]
              active:translate-x-0 active:translate-y-0
              active:shadow-[2px_2px_0px_0px_hsl(var(--foreground))]
              transition-all duration-200
              disabled:opacity-50 disabled:cursor-not-allowed
              disabled:hover:translate-x-0 disabled:hover:translate-y-0
              disabled:hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))]
            "
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Enviar mensaje
              </>
            )}
          </Button>

          {/* <p className="text-xs text-muted-foreground text-center font-mono">
            O escríbeme directo a{" "}
            <a
              href="mailto:hola@topidev.com"
              className="text-primary hover:underline"
            >
              hola@topidev.com
            </a>
          </p> */}
        </motion.form>
      </div>

    </section>
  )
}