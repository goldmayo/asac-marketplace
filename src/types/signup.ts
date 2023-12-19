import { z } from 'zod'

import { signUpFormSchema } from '@/lib/schema/signup'

export interface ISignUpPrams {
  memberName: string
  loginId: string
  password: string
  email: string
}

export interface ISignUpForm {
  form: z.infer<typeof signUpFormSchema>
}

export interface ICheckUserIdParams {
  loginId: string
}

export interface ICheckEmailParams {
  email: string
}
