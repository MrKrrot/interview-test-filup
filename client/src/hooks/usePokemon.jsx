import { useState } from 'react'
import { getAllPokemon, getPokemonById } from '@services'

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState([])
  const [error, setError] = useState(null)

  const fetchAllPokemon = async (page, search) => {
    const [error, data] = await getAllPokemon(page, search)

    if (error) {
      setError(error)
      return
    }

    setPokemon(data)
  }

  const fetchPokemon = async id => {
    const [error, data] = await getPokemonById(id)

    if (error) {
      setError(error)
      return
    }

    return data
  }

  return { error, pokemon, fetchPokemon, fetchAllPokemon }
}
