import { ServerError } from '@utils'

type Pokemon = {
  name: string
  url: string
}

export const findAllPokemon = async (limit = 151, page = 1, search = '') => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')

  if (!response.ok) {
    throw new ServerError('Failed to fetch pokemon', 500)
  }

  const data = await response.json()

  const pokemon = data.results as Pokemon[]

  const filteredPokemon = pokemon
    .filter(pokemon => pokemon.name.includes(search))
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice((page - 1) * limit, page * limit)

  return filteredPokemon
}
