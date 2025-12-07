import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import accessRoutes from './routes/access.routes.js'
import adminRoutes from './routes/admin.routes.js'
import errorHandler from './middleware/errorHandler.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Zero-Trust Backend Skeleton' })
})

app.use('/api/auth', authRoutes)
app.use('/api/access', accessRoutes)
app.use('/api/admin', adminRoutes)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})
