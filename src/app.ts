import express from 'express'
import corsMiddleware from './middlewares/cors.middleware'
import morganMiddleware from './middlewares/morgan.middleware'
import { jsonMiddleware, urlencodedMiddleware } from './middlewares/json.middleware'
import userRoutes from './routes/user/users.routes'
import profileRoutes from './routes/profile/profiles.routes'
// import errorMiddleware from './middlewares/error.middleware'

const app = express()

// Middlewares
app.use(corsMiddleware)
app.use(jsonMiddleware)
app.use(urlencodedMiddleware)
app.use(morganMiddleware)
// Middleware Error

// Routes
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/profiles', profileRoutes)
// Ruta 404 para rutas no encontradas
app.use('*', (_req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' })
})
// app.use(errorMiddleware)

app.get('/', (_req, res) => {
  res.send('API funcionando 🚀')
})

export default app
