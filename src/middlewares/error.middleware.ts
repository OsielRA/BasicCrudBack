import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import { ZodError, ZodIssue } from 'zod'

// Middleware de error con la firma correcta
const errorMiddleware: ErrorRequestHandler = (
  err: Error | ZodError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (err instanceof ZodError) {
    const formattedErrors = err.errors.map((e: ZodIssue) => ({
      field: e.path.join('.'),
      message: e.message
    }))
    res.status(400).json({
      message: 'Validation failed',
      errors: formattedErrors
    })
    return
  }

  // Comprobación de err.message
  const errorMessage = err instanceof Error ? err.message : 'Internal server error'
  res.status(500).json({
    message: errorMessage
  })
}

export default errorMiddleware
