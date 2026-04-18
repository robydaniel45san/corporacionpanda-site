import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  const url = process.env.VITE_SUPABASE_URL
  const key = process.env.VITE_SUPABASE_ANON_KEY

  if (!url || !key) {
    return res.status(500).json({ ok: false, error: 'missing env' })
  }

  const supabase = createClient(url, key)
  const { error } = await supabase.from('services').select('id').limit(1)

  if (error) return res.status(500).json({ ok: false, error: error.message })
  return res.status(200).json({ ok: true, at: new Date().toISOString() })
}
