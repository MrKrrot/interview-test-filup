import { Trainer, TrainerDocument } from '@models'
import { ServerError } from '@utils'

export const updateTrainer = async (id: string, trainer: TrainerDocument) => {
  const updatedTrainer = await Trainer.findByIdAndUpdate(id, trainer, { new: true })

  if (!updatedTrainer) {
    throw new ServerError('Trainer not found', 404)
  }

  return updatedTrainer
}
