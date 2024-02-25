import { API_URL } from '@config'

export const updateTrainer = async (id, newTrainer) => {
  const response = await fetch(`${API_URL}/api/v1/trainers/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTrainer)
  })

  const data = await response.json()

  if (!response.ok) {
    return [data.message, null]
  }

  return [null, data]
}
