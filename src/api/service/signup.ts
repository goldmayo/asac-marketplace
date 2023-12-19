import { ICheckEmailParams, ICheckUserIdParams, ISignUpForm } from '@/types/signup'
import { ISignUpPrams } from '@/types/signup'

export const encodeSignUpForm = (data: ISignUpForm): ISignUpPrams => {
  const { userId, userName, email, password } = data.form
  const MemberRequestBody = {
    memberName: userName,
    loginId: userId,
    password: password,
    email: email,
  }
  return MemberRequestBody
}

export const encodeCheckUserId = (userId: string): ICheckUserIdParams => {
  const checkUserId = {
    loginId: userId,
  }
  return checkUserId
}

export const encodeCheckEmail = (Email: string): ICheckEmailParams => {
  const checkEmail = {
    email: Email,
  }
  return checkEmail
}
