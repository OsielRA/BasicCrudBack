import { Sequelize, type Dialect, type Model, type ModelStatic } from 'sequelize'
import { User } from './user'
import { Profile } from './profile'

// Cargar la configuración
/* eslint-disable @typescript-eslint/no-var-requires */
const dbConfig = require('../../config/config') as Record<string, {
  username: string
  password?: string | null
  database: string
  host: string
  port: number
  dialect: Dialect
  logging?: boolean | ((sql: string, timing?: number) => void)
}>

// Cargar el ambiente
const env = (process.env.NODE_ENV ?? 'development') as keyof typeof dbConfig
const cfg = dbConfig[env]

// Instancia de Sequelize
export const sequelize = new Sequelize(
  cfg.database,
  cfg.username,
  (cfg.password ?? ''),
  {
    host: cfg.host,
    port: cfg.port,
    dialect: cfg.dialect,
    logging: cfg.logging
  }
)

export default async function initializeModels (): Promise<void> {
  // Inicializa los modelos
  User.initModel(sequelize)
  Profile.initModel(sequelize)

  // Definir asociaciones
  User.belongsTo(Profile, {
    as: 'profile',
    foreignKey: 'profileId'
  })
  Profile.hasMany(User, {
    as: 'users',
    foreignKey: 'profileId'
  })
}

// Exportar una constante db con los modelos y sequelize
export const db = {
  sequelize,
  User,
  Profile
}

/**
 * Helper opcional para obtener un modelo desde sequelize.models
 * No es necesario si usamos el objeto `db` exportado
 */
export function getModel<M extends Model> (name: string): ModelStatic<M> {
  const models: Record<string, ModelStatic<Model>> = sequelize.models as Record<string, ModelStatic<Model>>
  const model = models[name] as ModelStatic<M> | undefined

  if (model == null) {
    throw new Error(`Model ${name} is not initialized`)
  }

  return model
}
