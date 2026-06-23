import { useState } from 'react'
import axios from 'axios'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name: string
  email: string
  message: string
}

const BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:4000').replace(/\/$/, '')

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    message: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const validateField = (name: string, value: string): string => {
    if (name === 'name') {
      if (!value.trim()) return 'Full name is required'
      if (value.trim().length < 2) return 'Name must be at least 2 characters'
    }
    if (name === 'email') {
      if (!value.trim()) return 'Email address is required'
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) return 'Please enter a valid email address'
    }
    if (name === 'message') {
      if (!value.trim()) return 'Message is required'
      if (value.trim().length < 20) return 'Message must be at least 20 characters'
    }
    return ''
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors] !== undefined) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    if (errors[name as keyof FormErrors] !== undefined) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some((e) => e !== '')
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setSuccessMsg('')
    setErrorMsg('')

    if (!validateAll()) return

    setIsLoading(true)
    try {
      await axios.post(`${BASE_URL}/api/contact`, formData)
      setSuccessMsg('Form Submitted Successfully! We will get back to you soon. 🌸')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setErrors({ name: '', email: '', message: '' })
    } catch {
      setErrorMsg('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-primary-light">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mt-2 mb-4">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-gray-600 text-base max-w-xl mx-auto">
            Have a question or want to get involved? We'd love to hear from you.
            Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        {/* Success Banner */}
        {successMsg && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-5 py-4 rounded-xl flex items-start gap-3 animate-fade-in">
            <span className="text-xl">✅</span>
            <p className="text-sm font-medium">{successMsg}</p>
          </div>
        )}

        {/* Error Banner */}
        {errorMsg && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-5 py-4 rounded-xl flex items-start gap-3 animate-fade-in">
            <span className="text-xl">❌</span>
            <p className="text-sm font-medium">{errorMsg}</p>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Priya Sharma"
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200
                  focus:ring-2 focus:ring-primary focus:ring-opacity-30 focus:border-primary
                  ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="priya@example.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200
                  focus:ring-2 focus:ring-primary focus:ring-opacity-30 focus:border-primary
                  ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-dark mb-1.5">
              Phone Number <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-opacity-30 focus:border-primary"
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-dark mb-1.5">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={5}
              placeholder="Tell us how you'd like to get involved or ask us anything..."
              className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 resize-none
                focus:ring-2 focus:ring-primary focus:ring-opacity-30 focus:border-primary
                ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
            />
            <div className="flex justify-between items-center mt-1.5">
              {errors.message
                ? <p className="text-red-500 text-xs">{errors.message}</p>
                : <span />
              }
              <p className="text-xs text-gray-400 ml-auto">
                {formData.message.length} / 20 min
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary-dark transition-all duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </div>

        {/* Contact Info */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {[
            { icon: '📧', label: 'Email', value: 'president@shecanfoundation.org' },
            { icon: '📱', label: 'Phone', value: '+91-8283841830' },
            { icon: '🌐', label: 'Website', value: 'shecanfoundation.org' },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl py-4 px-3 shadow-sm">
              <p className="text-2xl mb-1">{item.icon}</p>
              <p className="text-xs font-semibold text-primary uppercase tracking-wide">{item.label}</p>
              <p className="text-xs text-gray-500 mt-0.5 break-all">{item.value}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
