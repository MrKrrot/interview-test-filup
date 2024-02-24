import { Request, Response, NextFunction } from 'express'
import { updateTrainer } from '@services'

export const updateTrainerById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params

  try {
    const updatedTrainer = await updateTrainer(id, req.body)
    res.status(200).json(updatedTrainer)
  } catch (error) {
    next(error)
  }
}
