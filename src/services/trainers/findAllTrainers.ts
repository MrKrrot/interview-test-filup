import { Trainer } from '@models'

export const findAllTrainers = async () => {
  return await Trainer.find()
}
