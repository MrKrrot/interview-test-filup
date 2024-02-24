import { Trainer } from '@models'
import { ServerError } from '@utils'

export const findTrainerById = async (id: string) => {
  const trainer = await Trainer.findById(id)

  if (!trainer) {
    throw new ServerError('Trainer not found', 404)
  }

  return trainer
}
