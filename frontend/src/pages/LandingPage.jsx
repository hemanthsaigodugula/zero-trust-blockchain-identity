import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import Dashboard from '../components/Dashboard'

export default function LandingPage() {
  const [view, setView] = useState('login')
  const [user, setUser] = useState(null)

  return (
    <div className="page">
      <header className="header">
        <h1>Zero-Trust Blockchain Identity</h1>
        <p>Real-time access control with immutable on-chain logs.</p>
      </header>

      {!user && (
        <div className="auth-toggle">
          <button onClick={() => setView('login')}>Login</button>
          <button onClick={() => setView('register')}>Register</button>
        </div>
      )}

      <main>
        {!user && view === 'login' && <LoginForm onLogin={setUser} />}
        {!user && view === 'register' && <RegisterForm onRegister={() => setView('login')} />}
        {user && <Dashboard user={user} onLogout={() => setUser(null)} />}
      </main>
    </div>
  )
}
