import { Trainer, TrainerDocument } from '@models'

export const createTrainer = async (trainer: TrainerDocument) => {
  const newTrainer = Trainer.create(trainer)

  return newTrainer
}
