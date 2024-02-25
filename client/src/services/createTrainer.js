import { API_URL } from '@config'

export const createTrainer = async trainer => {
  const response = await fetch(`${API_URL}/api/v1/trainers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(trainer)
  })
  const data = await response.json()

  if (!response.ok) {
    return [data.message, null]
  }

  return [null, data]
}
