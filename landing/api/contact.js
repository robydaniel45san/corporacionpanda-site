import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const OWNER_EMAIL = 'robyduran1997@gmail.com'
const FROM_EMAIL = 'Corporación Panda <contacto@corporacionpanda.site>'
const BRAND = 'Corporación Panda'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'method not allowed' })
  }

  const { name, email, phone, company, service, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'campos requeridos faltantes' })
  }

  const supabase = createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.VITE_SUPABASE_ANON_KEY
  )
  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error: sbErr } = await supabase.from('leads').insert([{
    name, email, phone, company, service, message,
  }])
  if (sbErr) {
    return res.status(500).json({ ok: false, error: sbErr.message })
  }

  const confirmationHtml = buildConfirmationEmail({ name, service, message })
  const notificationHtml = buildNotificationEmail({ name, email, phone, company, service, message })

  const [confirmRes, notifRes] = await Promise.allSettled([
    resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `Recibimos tu consulta — ${BRAND}`,
      html: confirmationHtml,
      replyTo: OWNER_EMAIL,
    }),
    resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      subject: `Nuevo lead: ${name}${company ? ` (${company})` : ''}`,
      html: notificationHtml,
      replyTo: email,
    }),
  ])

  return res.status(200).json({
    ok: true,
    confirmation: confirmRes.status,
    notification: notifRes.status,
  })
}

function buildConfirmationEmail({ name, service, message }) {
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#1E1E1E;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#F5F5F5;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#1E1E1E;padding:40px 20px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#252525;border-radius:16px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">
        <tr><td style="padding:48px 40px 24px;border-bottom:1px solid rgba(255,255,255,0.08);">
          <div style="font-family:'Space Grotesk',sans-serif;font-size:14px;letter-spacing:0.3em;color:#888;text-transform:uppercase;margin-bottom:8px;">Corporación</div>
          <div style="font-family:'Space Grotesk',sans-serif;font-style:italic;font-size:32px;color:#FFF;font-weight:400;letter-spacing:-0.02em;">Panda</div>
        </td></tr>
        <tr><td style="padding:40px;">
          <h1 style="margin:0 0 16px;font-family:'Space Grotesk',sans-serif;font-size:26px;font-weight:700;color:#FFF;letter-spacing:-0.02em;line-height:1.2;">Hola ${escapeHtml(name)},</h1>
          <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#CCC;">Recibimos tu consulta y queremos agradecerte por considerar a <strong style="color:#FFF;">Corporación Panda</strong> para tu proyecto.</p>
          <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#CCC;">Un miembro de nuestro equipo revisará tu mensaje y te contactará en <strong style="color:#FFF;">menos de 24 horas hábiles</strong> para agendar una consultoría inicial <strong style="color:#FFF;">100% gratuita y sin compromiso</strong>.</p>
          ${service ? `<div style="margin:28px 0;padding:20px;background:rgba(255,255,255,0.03);border-left:3px solid #FFF;border-radius:4px;">
            <div style="font-size:11px;letter-spacing:0.2em;color:#888;text-transform:uppercase;margin-bottom:6px;">Servicio de interés</div>
            <div style="font-size:15px;color:#FFF;font-weight:500;">${escapeHtml(service)}</div>
          </div>` : ''}
          <p style="margin:24px 0 0;font-size:14px;line-height:1.7;color:#888;">Mientras tanto, si surge alguna duda urgente, puedes responder directamente a este correo.</p>
        </td></tr>
        <tr><td style="padding:32px 40px;background:#1A1A1A;border-top:1px solid rgba(255,255,255,0.06);">
          <div style="font-size:13px;color:#CCC;margin-bottom:4px;"><strong style="color:#FFF;">Corporación Panda</strong> · Digital Studio</div>
          <div style="font-size:12px;color:#777;">Santa Cruz de la Sierra, Bolivia</div>
          <div style="font-size:12px;color:#777;margin-top:4px;">corporacionpanda.site</div>
        </td></tr>
      </table>
      <p style="margin-top:24px;font-size:11px;color:#555;font-family:Arial,sans-serif;">Este correo es una confirmación automática de tu consulta.</p>
    </td></tr>
  </table>
</body>
</html>`
}

function buildNotificationEmail({ name, email, phone, company, service, message }) {
  const row = (label, value) => value ? `<tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-size:13px;color:#666;width:140px;vertical-align:top;">${label}</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px;color:#111;">${escapeHtml(value)}</td></tr>` : ''
  return `<!DOCTYPE html>
<html><body style="margin:0;padding:24px;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;">
  <table width="600" style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e5e5;">
    <tr><td style="padding:24px 28px;background:#111;color:#fff;">
      <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#888;">Nuevo lead</div>
      <div style="font-size:20px;font-weight:700;margin-top:4px;">Corporación Panda</div>
    </td></tr>
    <tr><td style="padding:28px;">
      <table width="100%" cellpadding="0" cellspacing="0">
        ${row('Nombre', name)}
        ${row('Email', email)}
        ${row('Teléfono', phone)}
        ${row('Empresa', company)}
        ${row('Servicio', service)}
        <tr><td style="padding:14px 0 6px;font-size:13px;color:#666;vertical-align:top;">Mensaje</td></tr>
        <tr><td colspan="2" style="padding:6px 14px 14px;background:#f9f9f9;border-radius:8px;font-size:14px;color:#111;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</td></tr>
      </table>
      <div style="margin-top:24px;padding-top:16px;border-top:1px solid #eee;font-size:12px;color:#888;">Respóndele directo a este correo — reply-to ya apunta al cliente.</div>
    </td></tr>
  </table>
</body></html>`
}

function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]))
}
