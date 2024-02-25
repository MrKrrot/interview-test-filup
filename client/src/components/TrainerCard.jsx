import { useNavigate } from 'react-router-dom'
import { useTrainers } from '../hooks/useTrainers'

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
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
