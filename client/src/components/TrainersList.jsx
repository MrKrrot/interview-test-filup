import { TrainerCard } from './TrainerCard'

export const TrainerList = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map(trainer => (
        <TrainerCard key={trainer._id} trainer={trainer} />
      ))}
    </div>
  )
}
