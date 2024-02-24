import { Router } from 'express'

import {
  createNewTrainer,
  getAllTrainers,
  getTrainerById,
  updateTrainerById,
  deleteTrainerById
} from '@controllers'
import { schemaValidator } from '@middlewares'
import { trainerSchema } from '@validations'

const router = Router()

router.get('/', getAllTrainers)
router.get('/:id', getTrainerById)
router.post('/', schemaValidator(trainerSchema), createNewTrainer)
router.put('/:id', schemaValidator(trainerSchema), updateTrainerById)
router.delete('/:id', deleteTrainerById)

export default router
