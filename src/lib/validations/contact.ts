import { z } from 'zod'


export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre es muy largo"),
  email: z
    .string()
    .email("Email inválido")
    .min(1, "El email es requerido"),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(500, "El mensaje no puede exceder 500 caracteres"),
})
