import app from './app'
import initializeModels, { sequelize } from './db/models'

const port = Number(process.env.PORT ?? 3000)

async function bootstrap (): Promise<void> {
  await initializeModels()
  await sequelize.authenticate()
  console.log('✅ Base de datos conectada')

  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
  })
}

bootstrap().catch((e) => {
  console.error('❌ Bootstrap error:', e)
})
