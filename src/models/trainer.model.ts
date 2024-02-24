import { Schema, model, Document } from 'mongoose'

export interface TrainerDocument {
  name?: string
  lastName: string
  phone: string
  medals?: number
}

const trainerSchema = new Schema<TrainerDocument, Document>({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  lastName: {
    type: String,
    required: [true, 'lastName is required']
  },
  phone: {
    type: String,
    unique: true,
    required: [true, 'phone is required']
  },
  medals: {
    type: Number,
    default: 0
  }
})

trainerSchema.set('toJSON', {
  transform: (_doc, ret) => {
    delete ret.__v
  }
})

export default model<TrainerDocument>('Trainer', trainerSchema)
