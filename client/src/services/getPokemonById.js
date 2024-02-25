import { API_URL } from '@config'

export const getPokemonById = async id => {
  if (!id) {
    return ['No Pokémon ID provided', null]
  }

  const response = await fetch(`${API_URL}/api/v1/pokemon/${id}`)
  const data = await response.json()

  if (!response.ok) {
    return [data.message, null]
  }

  return [null, data]
}
