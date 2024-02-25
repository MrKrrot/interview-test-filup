import { API_URL } from '@config'

export const deleteTrainer = async id => {
  const response = await fetch(`${API_URL}/api/v1/trainers/${id}`, {
    method: 'DELETE'
  })

  if (!response.ok) {
    return [null, null]
  }

  return [null, id]
}
