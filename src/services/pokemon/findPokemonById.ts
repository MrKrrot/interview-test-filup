import { ServerError } from '@utils'

export const findPokemonById = async (id: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  if (response.status === 404) {
    throw new ServerError('Pokemon not found', 404)
  }

  if (!response.ok) {
    throw new ServerError('Internal server error', 500)
  }

  const data = await response.json()

  const pokemon = {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    sprites: data.sprites,
    types: data.types,
    stats: data.stats
  }

  return pokemon
}
