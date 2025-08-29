import type { Dialect, Model, ModelStatic } from 'sequelize'
import { Sequelize } from 'sequelize'
import { User } from './user'
import { UserTypes } from './userTypes'

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

const env = (process.env.NODE_ENV ?? 'development') as keyof typeof dbConfig
const cfg = dbConfig[env]

// (opcional) si quieres restringir a nombres válidos:
export const MODEL_NAMES = ['User', 'UserTypes'] as const
export type ModelName = typeof MODEL_NAMES[number]
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

/**
 * Inicializa modelos y define asociaciones.
 * Ejecutar SIEMPRE antes de usar `sequelize.models` o consultar/crear registros.
 */
export default async function initializeModels (): Promise<void> {
  // 1) Inicializa (atributos, opciones)
  User.initModel(sequelize)
  UserTypes.initModel(sequelize)

  // 2) Asociaciones (todas centralizadas aquí)
  // User ↔ UserTypes  (N:1)
  User.belongsTo(UserTypes, {
    as: 'userType',
    foreignKey: 'userTypeId'
  })
  UserTypes.hasMany(User, {
    as: 'users',
    foreignKey: 'userTypeId'
  })

  // Si quieres validar la integridad de asociaciones al inicio:
  // await sequelize.sync({ alter: false })  // opcional según tu flujo con CLI
}

/** Helper opcional para obtener un modelo tipeado desde sequelize.models */
export function getModel<M extends Model> (name: ModelName): ModelStatic<M> {
  // Tipamos el diccionario de modelos sin usar `any`
  const models: Record<string, ModelStatic<Model>> = sequelize.models as Record<string, ModelStatic<Model>>

  // Accedemos de forma segura
  const model = models[name] as ModelStatic<M> | undefined

  // Comparación explícita para satisfacer strict-boolean-expressions
  if (model == null) {
    throw new Error(`Model ${name} is not initialized`)
  }

  return model
}
