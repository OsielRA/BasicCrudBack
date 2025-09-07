import { Router } from 'express'
import { validate } from '../../middlewares/validate.middleware'
import {
  createProfileSchema
} from './profile.schema'
import { createProfileController, getAllProfilesController } from '../../controllers/profile/profile.controller'

const router = Router()

// Crear Perfil
router.post('/', validate(createProfileSchema), createProfileController)

// Obtener todos los Perfiles
router.get('/', getAllProfilesController)

export default router
