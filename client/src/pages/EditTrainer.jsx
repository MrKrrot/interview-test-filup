import { useParams } from 'react-router-dom'
import { Form } from '@components'

const EditTrainer = () => {
  const { trainerId } = useParams()

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">{trainerId ? 'Edit' : 'New'} Trainer</h1>
      <Form id={trainerId} />
    </div>
  )
}

export default EditTrainer
