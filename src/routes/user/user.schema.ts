import { z } from 'zod'

// Esquema para crear un usuario (POST)
export const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'El nombre es obligatorio'),
    lastName: z.string().min(1, 'El apellido es obligatorio'),
    userTypeId: z.number().int('Debe ser un número entero'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    email: z.string().email('El correo electrónico no es válido')
  })
})

// Esquema para actualizar un usuario (PUT)
export const updateUserSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'El id debe ser un número')
  }),
  body: z.object({
    name: z.string().optional(),
    lastName: z.string().optional(),
    userTypeId: z.number().optional(),
    password: z.string().min(6).optional(),
    email: z.string().email().optional()
  })
})

// Esquema para obtener usuario por id (GET /:id)
export const getUserSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'El id debe ser un número')
  })
})

// Esquema para eliminar usuario (DELETE /:id)
export const deleteUserSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'El id debe ser un número')
  })
})
