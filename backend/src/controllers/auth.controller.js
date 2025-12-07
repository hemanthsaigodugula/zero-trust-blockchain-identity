import jwt from 'jsonwebtoken'

const users = [] // In-memory demo store

export const register = (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' })
  }
  const exists = users.find(u => u.email === email)
  if (exists) {
    return res.status(409).json({ message: 'User already exists (demo)' })
  }
  const user = { id: users.length + 1, email, password }
  users.push(user)
  return res.status(201).json({ message: 'Registered (demo only)' })
}

export const login = (req, res) => {
  const { email, password } = req.body
  const user = users.find(u => u.email === email && u.password === password)
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials (demo)' })
  }
  const token = jwt.sign(
    { sub: user.id, email: user.email },
    process.env.JWT_SECRET || 'dev_secret',
    { expiresIn: '1h' }
  )
  return res.json({ token, user: { email: user.email } })
}
