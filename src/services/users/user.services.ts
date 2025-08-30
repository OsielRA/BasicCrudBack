import { CreateUserDTO } from '../../../src/dto/user.dto'
import { db } from '../../db/models'
import { UserAttributes } from '../../db/models/user'

export const createUser = async (data: CreateUserDTO): Promise<UserAttributes> => {
  const user = await db.User.create(data)
  return user
}

export const getAllUsers = async (): Promise<UserAttributes[]> => {
  const users = await db.User.findAll()
  return users
}

export const getUserById = async (id: number): Promise<UserAttributes | null> => {
  const user = await db.User.findByPk(id)
  return user
}
