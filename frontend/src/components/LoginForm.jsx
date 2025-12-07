import React, { useState } from 'react'
import apiClient from '../services/apiClient'

export default function LoginForm({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await apiClient.post('/auth/login', form)
      onLogin(res.data.user)
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        Email
        <input name="email" type="email" value={form.email} onChange={handleChange} required />
      </label>
      <label>
        Password
        <input name="password" type="password" value={form.password} onChange={handleChange} required />
      </label>
      {error && <p className="error">{error}</p>}
      <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
    </form>
  )
}
