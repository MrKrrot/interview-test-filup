import { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'

import { ServerError } from '@utils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorHandler = (err: any, req: Request, res: Response, _next: NextFunction) => {
  if (err.name === 'CastError') {
    return res.status(400).json({
      message: 'Invalid id',
      statusCode: 400
    })
  }

  if (err.code === 11000) {
    return res.status(409).json({
      message: 'That phone number already exists.',
      statusCode: 409
    })
  }

  if (err instanceof ZodError) {
    return res.status(400).json({
      message: err.errors.map(err => err.message),
      statusCode: 400
    })
  }

  if (err instanceof ServerError) {
    return res.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message
    })
  }

  res.status(500).json({ statusCode: 500, message: err.message })
}

export default errorHandler
