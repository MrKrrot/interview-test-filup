import { NextFunction, Request, Response } from 'express'
import { findAllTrainers } from '@services'

export const getAllTrainers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const trainers = await findAllTrainers()
    res.status(200).json(trainers)
  } catch (error) {
    next(error)
  }
}
