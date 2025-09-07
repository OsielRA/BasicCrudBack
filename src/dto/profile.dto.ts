import { ProfileAttributes } from '../db/models/profile'

// DTO para la creación de un perfil
export type CreateProfileDTO = Omit<ProfileAttributes, 'id' | 'createdAt' | 'updatedAt'>
