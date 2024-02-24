import { Trainer } from '@models'
import { ServerError } from '@utils'

export const deleteTrainer = async (id: string) => {
  const trainer = await Trainer.findByIdAndDelete(id)

  if (!trainer) {
    throw new ServerError('Trainer not found', 404)
  }

  return trainer
}
