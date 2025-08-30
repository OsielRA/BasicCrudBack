import { UserAttributes } from '../db/models/user'

// DTO para la creación de un usuario
export type CreateUserDTO = Omit<UserAttributes, 'id' | 'createdAt' | 'updatedAt'>
