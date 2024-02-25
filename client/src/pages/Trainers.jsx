import { useEffect } from 'react'
import { useTrainers } from '@hooks'
import { TrainerList } from '@components'
import { Link } from 'react-router-dom'

const Trainers = () => {
  const { trainers, getTrainers } = useTrainers()

  useEffect(() => {
    getTrainers()
  }, [])

  const handleDownload = () => {
    const data = trainers.map(trainer => {
      return {
        Name: trainer.name,
        LastName: trainer.lastName,
        Phone: trainer.phone,
        Medals: trainer.medals
      }
    })

    const csv = data.map(row => Object.values(row).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('hidden', '')
    a.setAttribute('href', url)
    a.setAttribute('download', 'trainers.csv')
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 block mb-4">
        Back to Home
      </Link>
      <Link to="/trainers/new" className="text-blue-500 block mb-4">
        New Trainer
      </Link>
      <button
        onClick={handleDownload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download CSV
      </button>
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
