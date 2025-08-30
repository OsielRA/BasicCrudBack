import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'

// Tipado de los valores que Zod puede recibir
export const validate = <T extends AnyZodObject>(schema: T) => (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    // Se validan los valores de body, query y params
    const parsed = schema.parse({
      body: req.body,
      query: req.query,
      params: req.params
    })

    // Tipamos req.body, req.query, req.params
    req.body = parsed.body
    req.query = parsed.query
    req.params = parsed.params

    next()
  } catch (error) {
    next(error)
  }
}
