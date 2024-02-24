import { NextFunction, Request, Response } from 'express'

import { findPokemonById } from '@services'

export const getPokemonById = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id

  try {
    const data = await findPokemonById(id)

    res.json(data)
  } catch (error) {
    next(error)
  }
}
