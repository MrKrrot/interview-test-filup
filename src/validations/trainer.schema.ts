import { number, object, string } from 'zod'

export const trainerSchema = object({
  name: string({ required_error: 'name is required' }).min(3, 'name must be at least 3 characters'),
  lastName: string({ required_error: 'lastName is required' }).min(
    3,
    'lastName must be at least 3 characters'
  ),
  phone: string({ required_error: 'phone is required' }).min(
    10,
    'phone must be at least 10 characters'
  ),
  medals: number().default(0)
})
