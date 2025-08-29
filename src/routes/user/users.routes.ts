import { Router } from 'express'
import { validate } from '../../middlewares/validate.middleware'
import {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
  deleteUserSchema
} from './user.schema'
import { getAllUsers } from '../../controllers/user.controller'

const router = Router()

// Crear usuario
router.post('/', validate(createUserSchema), (req, res) => {
  res.json({ message: 'Usuario creado', data: req.body })
})

// Obtener todos los usuarios
router.get('/', async (_req, res) => {
  const users = await getAllUsers()
  res.json(users)
})

// Obtener usuario por ID
router.get('/:id', validate(getUserSchema), (req, res) => {
  res.json({ message: `Detalle del usuario ${req.params.id}` })
})

// Actualizar usuario
router.put('/:id', validate(updateUserSchema), (req, res) => {
  res.json({ message: `Usuario ${req.params.id} actualizado`, data: req.body })
})

// Eliminar usuario
router.delete('/:id', validate(deleteUserSchema), (req, res) => {
  res.json({ message: `Usuario ${req.params.id} eliminado` })
})

export default router
