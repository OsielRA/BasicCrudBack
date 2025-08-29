import { getModel } from '../db/models'
import type { User } from '../db/models/user'

// Getter "lazy" para obtener el modelo cuando el handler corre
const UserModel = () => getModel<User>('User')

export const getAllUsers = async (): Promise<User[]> => {
  const User = UserModel()
  const users = await User.findAll({ raw: true })
  return users
}
