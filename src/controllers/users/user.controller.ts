import { Request, Response } from 'express'
import { createUser, getAllUsers } from '../../services/users/user.services'
import { CreateUserDTO } from '../../../src/dto/user.dto'

export const createUserController = async (req: Request, res: Response): Promise<void> => {
  const { name, lastName, email, password, profileId } = req.body as CreateUserDTO
  const user = await createUser({ name, lastName, email, password, profileId })

  res.status(201).json({ message: 'Usuario creado', data: user })
}

export const getAllUsersController = async (_req: Request, res: Response): Promise<void> => {
  const users = await getAllUsers()
  res.status(200).json({ message: 'Usuarios encontrados', data: users })
}
