import { Request, Response, NextFunction } from 'express'
import { deleteTrainer } from '@services'

export const deleteTrainerById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params

  try {
    await deleteTrainer(id)
    res.status(204).end()
  } catch (error) {
    next(error)
  }
}
