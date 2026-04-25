import type { APIRoute } from 'astro'
import { Resend } from 'resend'
import { contactSchema } from "@/lib/validations/contact"

export const prerender = false
const resend = new Resend(import.meta.env.RESEND_API_KEY)

// Rate Limit
const rateLimitMap = new Map<string, number[]>()
const LIMIT = 3
const WINDOW = 60 * 60 * 1000

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateLimitMap.get(ip) || []
  const recent = timestamps.filter(t => now - t < WINDOW)

  if (recent.length >= LIMIT) { return false }

  recent.push(now)
  rateLimitMap.set(ip, recent)
  return true
}

export const POST: APIRoute = async ({ request, clientAddress }) => {

  const ip = request.headers.get('x-forwarded-for')?.split('.')[0] || clientAddress || 'uknown'

  if (!rateLimit(ip)) {
    return new Response(JSON.stringify({
      error: 'Demasiados Intentos. Espera 60 Minutos.'
    }), {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'Retry-After': '3600'
      }
    })
  }


  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    const { error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'topitzinmm@gmail.com',
      replyTo: data.email,
      subject: `💼 Nuevo mensaje de ${data.name}`,
      html: `
        <h2>Nuevo contacto</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `
    })

    if (error) {
      console.error('Resend error:', error)
      return new Response(JSON.stringify({ error: 'Error al enviar email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    console.log('Mensaje recibido:', data)

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al Enviar' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}