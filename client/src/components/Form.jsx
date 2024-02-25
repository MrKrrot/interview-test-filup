import { useEffect, useState } from 'react'
import { useTrainers } from '@hooks'
import { useNavigate } from 'react-router-dom'

export const Form = ({ id }) => {
  const [data, setData] = useState({
    name: '',
    lastName: '',
    phone: '',
    medals: 0
  })

  const [error, setError] = useState(null)

  const { getTrainer, createNewTrainer, updateTrainerById } = useTrainers()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchTrainer() {
      const [error, data] = await getTrainer(id)
      if (error) {
        return
      }

      setData(data)
    }

    if (id) {
      fetchTrainer()
    }
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()

    data.medals = Number(data.medals)

    if (id) {
      const [error] = await updateTrainerById(id, data)
      if (error) {
        setError(error)
        return
      }
    } else {
      const [error] = await createNewTrainer(data)
      if (error) {
        setError(error)
        return
      }
    }

    setData({
      name: '',
      lastName: '',
      phone: '',
      medals: 0
    })

    navigate('/trainers')
  }

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xs mx-auto">
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={e => setData({ ...data, name: e.target.value })}
          placeholder="Name"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={e => setData({ ...data, lastName: e.target.value })}
          placeholder="Last Name"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="phone"
          value={data.phone}
          onChange={e => setData({ ...data, phone: e.target.value })}
          placeholder="Phone"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="medals"
          value={data.medals}
          onChange={e => setData({ ...data, medals: e.target.value })}
          placeholder="Medals"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
