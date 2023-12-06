'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import CheckModal from '@/components/common/modal/checkModal'
import SignupValidationContainer from '@/components/feature/signup/SignupValidationContainer'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signUpFormSchema } from '@/lib/schema/signup'

import SignupAgreement from './signupAgreement'

const FormSchema = signUpFormSchema

export default function SignupForm() {
  const router = useRouter()
  const state = useModalState()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      agreement: {
        allAgree: false,
        termsOfUse: false,
        termsOfPersonalInfo: false,
        termsOfMarketing: false,
        termsOfAge: false,
      },
    },
    mode: 'onChange',
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  const openCheckUserIdModal = (userId: string) => {
    state.setModal(<CheckModal content="사용 가능한 아이디입니다." />)
    state.modalRef.current?.showModal()
  }
  const openCheckEmailModal = (email: string) => {
    state.setModal(<CheckModal content="사용 가능한 이메일입니다." />)
    state.modalRef.current?.showModal()
  }
  const openCheckPhoneModal = (phone: string) => {
    state.setModal(<CheckModal content="인증번호가 발송되었습니다." />)
    state.modalRef.current?.showModal()
  }
  async function handleValidateUserId(userId: string) {
    console.log(userId)
    openCheckUserIdModal(userId)
  }
  async function handleValidateEmail(email: string) {
    console.log(email)
    openCheckEmailModal(email)
    // const isDuplicatedEmail = await fetch(`http:localhost:8080/api/members/check-email`, {
    // const result = await fetch(`/api/members/check-email`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email,
    //   }),
    // })

    // if (result.ok) {
    //   form.clearErrors('email')
    //   // form.getFieldState("email").invalid
    // } else {
    //   form.setError('email', { message: '중복된 이메일입니다' }, { shouldFocus: false })
    // }
  }
  async function handleValidatePhone(phone: string) {
    console.log(phone)

    openCheckPhoneModal(phone)
  }
  return (
    <section className="py-8 px-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 ">
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem className="h-28">
                  <FormLabel>아이디</FormLabel>
                  <SignupValidationContainer>
                    <FormControl>
                      <Input className="h-12" autoComplete="username" placeholder="아이디를 입력해주세요" {...field} />
                    </FormControl>
                    <Button
                      type="button"
                      variant={
                        !form.getFieldState('userId').invalid && form.getFieldState('userId').isDirty
                          ? 'outline'
                          : 'ghost'
                      }
                      disabled={form.getFieldState('userId').invalid && form.getFieldState('userId').isDirty}
                      className="h-12"
                      onClick={() => handleValidateUserId(field.value)}
                    >
                      중복확인
                    </Button>
                  </SignupValidationContainer>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="h-28">
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input
                      type={'password'}
                      autoComplete="new-password"
                      className="h-12"
                      placeholder="비밀번호를 입력해주세요"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem className="h-28">
                  <FormLabel>비밀번호 확인</FormLabel>
                  <FormControl>
                    <Input
                      type={'password'}
                      autoComplete="new-password"
                      className="h-12"
                      placeholder="비밀번호를 한번 더 입력해주세요"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem className="h-28">
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input className="h-12" placeholder="이름을 입력해주세요" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="h-28">
                  <FormLabel>이메일</FormLabel>
                  <SignupValidationContainer>
                    <FormControl>
                      <Input type={'email'} className="h-12" placeholder="예: marketplace@gmail.com" {...field} />
                    </FormControl>
                    <Button
                      type="button"
                      variant={
                        !form.getFieldState('email').invalid && form.getFieldState('email').isDirty
                          ? 'outline'
                          : 'ghost'
                      }
                      disabled={form.getFieldState('email').invalid && form.getFieldState('email').isDirty}
                      className="h-12"
                      onClick={() => handleValidateEmail(field.value)}
                    >
                      중복확인
                    </Button>
                  </SignupValidationContainer>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <>
                    <FormItem className="h-28">
                      <FormLabel>휴대폰</FormLabel>
                      <SignupValidationContainer>
                        <FormControl>
                          <Input className="h-12" placeholder="숫자만 입력해주세요" {...field} />
                        </FormControl>
                        <Button
                          type="button"
                          variant={
                            !form.getFieldState('phone').invalid && form.getFieldState('phone').isDirty
                              ? 'outline'
                              : 'ghost'
                          }
                          disabled={form.getFieldState('phone').invalid && form.getFieldState('phone').isDirty}
                          className="h-12"
                          onClick={() => handleValidatePhone(field.value)}
                        >
                          인증번호 받기
                        </Button>
                      </SignupValidationContainer>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
            </div>
          </div>
          <SignupAgreement form={form} />
          {/* signup agreement */}
          <div className="space-y-3">
            {/* <Button type="button" variant={'primary'} disabled={} onClick={() => router.push('/')} className="w-full h-12"> */}
            <Button type="submit" variant={'primary'} className="w-full h-12">
              가입하기
            </Button>
          </div>
        </form>
      </Form>
    </section>
  )
}
