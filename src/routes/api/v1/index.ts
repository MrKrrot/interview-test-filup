import { Router } from 'express'

import pokemonRoutes from './pokemon'
import trainerRoutes from './trainers'

const router = Router()

router.use('/pokemon', pokemonRoutes)
router.use('/trainers', trainerRoutes)

export default router
