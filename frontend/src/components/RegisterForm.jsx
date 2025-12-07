import React, { useState } from 'react'
import apiClient from '../services/apiClient'

export default function RegisterForm({ onRegister }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)
    try {
      await apiClient.post('/auth/register', form)
      setSuccess('Registered! You can now login.')
      onRegister()
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label>
        Email
        <input name="email" type="email" value={form.email} onChange={handleChange} required />
      </label>
      <label>
        Password
        <input name="password" type="password" value={form.password} onChange={handleChange} required />
      </label>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <button type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
    </form>
  )
}
