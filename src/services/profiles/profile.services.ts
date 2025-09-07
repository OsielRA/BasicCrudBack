import { CreateProfileDTO } from '../../dto/profile.dto'
import { db } from '../../db/models'
import { ProfileAttributes } from '../../db/models/profile'

export const createProfile = async (data: CreateProfileDTO): Promise<ProfileAttributes> => {
  const profile = await db.Profile.create(data)
  return profile
}

export const getAllProfiles = async (): Promise<ProfileAttributes[]> => {
  const profiles = await db.Profile.findAll()
  return profiles
}

export const getUserById = async (id: number): Promise<ProfileAttributes | null> => {
  const profile = await db.Profile.findByPk(id)
  return profile
}
