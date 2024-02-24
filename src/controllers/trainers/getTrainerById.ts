import { Request, Response, NextFunction } from 'express'
import { findTrainerById } from '@services'

export const getTrainerById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params

  try {
    const trainer = await findTrainerById(id)
    res.status(200).json(trainer)
  } catch (error) {
    next(error)
  }
}
