import { NextFunction, Request, Response } from 'express'

import { findAllPokemon } from '@services'
import { ServerError } from '@utils'

export const getAllPokemon = async (req: Request, res: Response, next: NextFunction) => {
  const search = req.query.search as string
  let limit = 151
  let page = 1

  if (req.query.limit) {
    limit = parseInt(req.query.limit as string)
  }

  if (req.query.page) {
    page = parseInt(req.query.page as string)
  }

  try {
    if (isNaN(limit)) {
      throw new ServerError('Limit must be a number', 400)
    }

    if (isNaN(page)) {
      throw new ServerError('Page must be a number', 400)
    }

    const data = await findAllPokemon(limit, page, search)

    res.json(data)
  } catch (error) {
    next(error)
  }
}
