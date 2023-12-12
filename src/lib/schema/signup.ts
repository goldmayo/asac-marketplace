import { z } from 'zod'

const phoneRegex = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/)

export const signUpFormSchema = z
  .object({
    userId: z.string({ required_error: '필수 입력입니다.' }).min(2, {
      message: '아이디는 2글자이상을 입력해주세요.',
    }),
    password: z
      .string({ required_error: '필수 입력입니다.' })
      .min(8, { message: '비밀번호는 8자리이상을 입력해주세요.' }),
    passwordConfirm: z.string({ required_error: '필수 입력입니다.' }),
    userName: z.string({ required_error: '필수 입력입니다.' }).min(2, {
      message: '이름는 2글자이상을 입력해주세요.',
    }),
    email: z
      .string({ required_error: '필수 입력입니다.' })
      .min(1, { message: '이메일을 입력해주세요.' })
      .email({ message: '유효하지 않은 이메일 형식입니다.' }),
    phone: z
      .string({ required_error: '필수 입력입니다.' })
      .regex(phoneRegex, { message: '유효하지 않은 전화번호 형식입니다.' }),
    agreement: z
      .object({
        allAgree: z.boolean().optional(),
        termsOfUse: z.literal<boolean>(true),
        termsOfPersonalInfo: z.literal<boolean>(true),
        termsOfMarketing: z.boolean().optional(),
        termsOfAge: z.literal<boolean>(true),
      })
      .required({ termsOfAge: true, termsOfPersonalInfo: true, termsOfUse: true }),
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    if (password !== passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '비밀번호가 일치하지 않습니다.',
        path: ['passwordConfirm'],
      })
    }
  })

/**
 * refine - min, max처럼 간단하지 않은 조건에 대해서 value로 커스텀이 필요하다면 사용합니다.
 * superRefine - 여러 input에 의존하는 validation과 함께 context에 접근하여 각 상황마다 ctx.addIssue 로 에러를 지정할 때 사용합니다.
 */

export type SignUpInterface = z.infer<typeof signUpFormSchema>
