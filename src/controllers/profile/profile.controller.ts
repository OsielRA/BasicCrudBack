import { Request, Response } from 'express'
import { createProfile, getAllProfiles } from '../../services/profiles/profile.services'
import { CreateProfileDTO } from '../../dto/profile.dto'

export const createProfileController = async (req: Request, res: Response): Promise<void> => {
  const newProfile: CreateProfileDTO = req.body
  const profile = await createProfile(newProfile)

  res.status(201).json({ message: 'Perfil creado', data: profile })
}

export const getAllProfilesController = async (_req: Request, res: Response): Promise<void> => {
  const profiles = await getAllProfiles()
  res.status(200).json({ message: 'Perfiles encontrados', data: profiles })
}
