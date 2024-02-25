import { useNavigate } from 'react-router-dom'
import { useTrainers } from '@hooks'
import { Button } from '@components'

export const TrainerCard = ({ trainer }) => {
  const { deleteTrainerById } = useTrainers()
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/trainers/${trainer._id}`)
  }

  const handleDelete = () => {
    deleteTrainerById(trainer._id)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold">
        {trainer.name} {trainer.lastName}
      </h2>
      <p className="text-gray-500">Phone: {trainer.phone}</p>
      <p className="text-gray-500">Medals: {trainer.medals}</p>
      <div className="flex justify-end mt-4">
        <Button color="blue" handleClick={handleEdit}>
          Edit
        </Button>
        <Button color="red" handleClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  )
}
