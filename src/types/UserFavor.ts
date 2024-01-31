import { FamilyMember } from '@/types/FamilyMember'

export interface UserFavor {
  days: number
  policy: string
  dislikeFood: string[]
  familyMembers: FamilyMember[]
}
