import { MomentInput } from 'moment'

export type CalorieItemData = {
  id?: string
  description: string
  amount: string
  date: MomentInput
}
