import { useEffect } from 'react'
import { useTrainers } from '@hooks'
import { TrainerList } from '@components'
import { Link } from 'react-router-dom'

const Trainers = () => {
  const { trainers, getTrainers } = useTrainers()

  useEffect(() => {
    getTrainers()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 block mb-4">
        Back to Home
      </Link>
      <Link to="/trainers/new" className="text-blue-500 block mb-4">
        New Trainer
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-center">Trainers</h1>
      {trainers.length > 0 ? (
        <TrainerList data={trainers} />
      ) : (
        <p className="text-center">Loading trainers...</p>
      )}
    </div>
  )
}

export default Trainers
