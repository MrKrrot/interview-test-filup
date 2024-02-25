import { API_URL } from '@config'

export const getAllPokemon = async (page = 1, search = '') => {
  const response = await fetch(`${API_URL}/api/v1/pokemon?page=${page}&limit=20&search=${search}`)
  const data = await response.json()

  if (!response.ok) {
    return [data.message, null]
  }

  return [null, data]
}
