import { useState, useEffect } from 'react'
import AdminTable from '../components/AdminTable'
import axios from 'axios'

interface Submission {
  id: number
  name: string
  email: string
  phone: string | null
  message: string
  created_at: string
}

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'
const ADMIN_PASSWORD = 'shecan2024'

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [fetchError, setFetchError] = useState('')

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setPasswordError('')
    } else {
      setPasswordError('Incorrect password. Please try again.')
    }
  }

  const fetchSubmissions = async () => {
    setIsLoading(true)
    setFetchError('')
    try {
      const res = await axios.get(`${BASE_URL}/api/contact`)
      setSubmissions(res.data)
    } catch {
      setFetchError('Failed to load submissions. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!isAuthenticated) return
    let cancelled = false
    ;(async () => {
      setIsLoading(true)
      setFetchError('')
      try {
        const res = await axios.get(`${BASE_URL}/api/contact`)
        if (!cancelled) setSubmissions(res.data)
      } catch {
        if (!cancelled) setFetchError('Failed to load submissions. Please try again.')
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-primary-light flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">

          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">SC</span>
            </div>
            <h1 className="text-xl font-bold text-dark">Admin Panel</h1>
            <p className="text-gray-500 text-sm mt-1">She Can Foundation</p>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-dark mb-1.5">
              Admin Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-30 focus:border-primary transition-all duration-200"
            />
            {passwordError && (
              <p className="text-red-500 text-xs mt-1.5">{passwordError}</p>
            )}
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-dark transition-all duration-200 hover:scale-[1.02]"
          >
            Login
          </button>

          <p className="text-center text-xs text-gray-400 mt-6">
            This panel is restricted to authorized personnel only.
            <br />
            In production, this would use JWT authentication.
          </p>

          <div className="text-center mt-4">
            <a href="/" className="text-primary text-sm hover:underline">
              ← Back to Website
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Admin Navbar */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-xs">SC</span>
          </div>
          <div>
            <p className="font-bold text-dark text-sm">She Can Foundation</p>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="text-sm text-gray-500 hover:text-primary transition-colors duration-200"
          >
            ← View Website
          </a>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold text-dark">Contact Submissions</h1>
          <p className="text-gray-500 text-sm mt-1">
            All messages received through the She Can Foundation contact form
          </p>
        </div>

        {/* Error */}
        {fetchError && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-5 py-4 rounded-xl text-sm">
            {fetchError}
          </div>
        )}

        {/* Loading */}
        {isLoading && submissions.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-sm">Loading submissions...</p>
          </div>
        ) : (
          <AdminTable
            submissions={submissions}
            onRefresh={fetchSubmissions}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  )
}