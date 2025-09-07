import { z } from 'zod'

// POST /profiles
export const createProfileSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'El nombre es obligatorio'),
    description: z.string().min(1, 'La descripción es obligatoria'),
    rol: z.string().min(1, 'El rol es obligatorio')
  })
})

// PUT /profiles/:id
export const updateProfileSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'El id debe ser un número')
  }),
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    rol: z.string().optional()
  })
})

// GET /profiles/:id
export const getProfileByIdSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'El id debe ser un número')
  })
})

// DELETE /profiles/:id
export const deleteProfileByIdSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'El id debe ser un número')
  })
})

// Tipos inferidos para usar en controladores
export type CreateProfileBody = z.infer<typeof createProfileSchema>['body']
export type UpdateProfileParams = z.infer<typeof updateProfileSchema>['params']
export type UpdateProfileBody = z.infer<typeof updateProfileSchema>['body']
export type IdParam = z.infer<typeof getProfileByIdSchema>['params']
