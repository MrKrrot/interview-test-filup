import { API_URL } from '@config'

export const getAllTrainers = async () => {
  const response = await fetch(`${API_URL}/api/v1/trainers`)
  const data = await response.json()

  if (!response.ok) {
    return [data.message, null]
  }

  return [null, data]
}
