/* eslint-disable no-console */
import { useState } from 'react'
import {
  getAllTrainers,
  getTrainerById,
  createTrainer,
  updateTrainer,
  deleteTrainer
} from '@services'
import { TrainerContext } from './TrainerContext'

export const TrainerContextProvider = ({ children }) => {
  const [trainers, setTrainers] = useState([])

  async function getTrainers() {
    const [error, data] = await getAllTrainers()
    if (error) {
      return [error, null]
    }

    setTrainers(data)
    return [null, data]
  }

  const getTrainer = async id => {
    const [error, data] = await getTrainerById(id)

    if (error) {
      return [error, null]
    }

    return [null, data]
  }

  const createNewTrainer = async trainer => {
    const [error, data] = await createTrainer(trainer)

    if (error) {
      return [error, null]
    }

    setTrainers([data, ...trainers])
    return [null, data]
  }

  const updateTrainerById = async (id, updatedTrainer) => {
    const [error, data] = await updateTrainer(id, updatedTrainer)

    if (error) {
      return [error, null]
    }

    setTrainers(trainers.map(trainer => (trainer.id === id ? data : trainer)))
    return [null, data]
  }

  const deleteTrainerById = async id => {
    const [error, data] = await deleteTrainer(id)

    if (error) {
      return [error, null]
    }

    setTrainers(trainers.filter(trainer => trainer._id !== id))
    return [null, data]
  }

  return (
    <TrainerContext.Provider
      value={{
        trainers,
        getTrainers,
        getTrainer,
        createNewTrainer,
        updateTrainerById,
        deleteTrainerById
      }}
    >
      {children}
    </TrainerContext.Provider>
  )
}
