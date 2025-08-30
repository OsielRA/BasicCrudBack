import { Router } from 'express'
import { validate } from '../../middlewares/validate.middleware'
import {
  createUserSchema
} from './user.schema'
import { createUserController, getAllUsersController } from '../../controllers/users/user.controller'

const router = Router()

// Crear usuario
router.post('/', validate(createUserSchema), createUserController)

// Obtener todos los usuarios
router.get('/', getAllUsersController)

export default router
