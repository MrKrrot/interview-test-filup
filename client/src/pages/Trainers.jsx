import { useEffect } from 'react'
import { useTrainers } from '@hooks'
import { TrainerList, Empty, Button } from '@components'
import { Link, useNavigate } from 'react-router-dom'

const Trainers = () => {
  const { trainers, getTrainers } = useTrainers()

  const navigate = useNavigate()

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
      <div className="flex justify-between items-center mb-8">
        <Link
          to="/"
          className=" text-blue-500 px-4 py-2 rounded-md hover:underline transition-all duration-200 ease-in-out"
        >
          Back to Home
        </Link>
        <Button color="green" handleClick={() => navigate('/trainers/new')}>
          New Trainer
        </Button>
        <Button handleClick={handleDownload} color="red">
          Download CSV
        </Button>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-center">Trainers</h1>
      {trainers.length > 0 ? (
        <TrainerList data={trainers} />
      ) : (
        <Empty text="There are no trainers yet." />
      )}
    </div>
  )
}

export default Trainers
