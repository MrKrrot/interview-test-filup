import { Router } from 'express'
import { getAllPokemon, getPokemonById } from '@controllers'

const router = Router()

router.get('/', getAllPokemon)
router.get('/:id', getPokemonById)

export default router
