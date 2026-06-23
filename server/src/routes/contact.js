import express from 'express'
import { supabase } from '../db/supabase.js'

const router = express.Router()

// POST /api/contact — save a new submission
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body

  // Server-side validation
  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Name is required' })
  }
  if (!email || !email.trim()) {
    return res.status(400).json({ error: 'Email is required' })
  }
  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required' })
  }

  const { error } = await supabase
    .from('contact_submissions')
    .insert({ name: name.trim(), email: email.trim(), phone: phone?.trim() || null, message: message.trim() })

  if (error) {
    console.error('Supabase error:', error)
    return res.status(500).json({ error: error.message })
  }

  return res.status(201).json({ message: 'Submission saved successfully' })
})

// GET /api/contact — fetch all submissions (for admin panel)
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Supabase error:', error)
    return res.status(500).json({ error: error.message })
  }

  return res.status(200).json(data)
})

export default router