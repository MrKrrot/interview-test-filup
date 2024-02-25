import { useContext } from 'react'
import { TrainerContext } from '../context/TrainerContext'

export const useTrainers = () => {
  const context = useContext(TrainerContext)
  if (context === undefined) {
    throw new Error('useTrainers must be used within a TrainerContextProvider')
  }
  return context
}
