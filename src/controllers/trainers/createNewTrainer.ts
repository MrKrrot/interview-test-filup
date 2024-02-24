import { NextFunction, Request, Response } from 'express'
import { createTrainer } from '@services'

export const createNewTrainer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newTrainer = await createTrainer(req.body)
    res.status(201).json(newTrainer)
  } catch (error) {
    next(error)
  }
}
