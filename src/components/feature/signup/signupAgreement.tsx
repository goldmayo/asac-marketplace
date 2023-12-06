'use client'
import { CheckedState } from '@radix-ui/react-checkbox'
import React from 'react'
import { UseFormReturn } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { CheckCircleIcon } from '@/lib/icons'
import { SignUpInterface } from '@/lib/schema/signup'
import { cn } from '@/lib/utils'

interface ISignUpAgreement {
  form: UseFormReturn<SignUpInterface, any, undefined>
}

const items = [
  {
    id: 'termsOfUse',
    label: '이용약관 동의',
    require: true,
  },
  {
    id: 'termsOfPersonalInfo',
    label: '개인정보, 이용 동의',
    require: true,
  },
  {
    id: 'termsOfMarketing',
    label: '무료배송, 할인 쿠폰 등 혜택/정보 수신 동의',
    require: false,
  },
  {
    id: 'termsOfAge',
    label: '본인은 만 14세 이상입니다',
    require: true,
  },
] as const

export default function SignupAgreement({ form }: ISignUpAgreement) {
  const isAllChecked = () => {
    return (
      form.getValues('agreement.termsOfAge') &&
      form.getValues('agreement.termsOfMarketing') &&
      form.getValues('agreement.termsOfPersonalInfo') &&
      form.getValues('agreement.termsOfUse')
    )
  }

  const handleAllAgree = (checked: CheckedState, fieldName: any) => {
    checked ? form.setValue(fieldName, true) : form.setValue(fieldName, false)
    return isAllChecked() ? form.setValue(`agreement.allAgree`, true) : form.setValue(`agreement.allAgree`, false)
  }

  const handleAllCheck = (checked: CheckedState) => {
    let temp = checked
    temp ? form.setValue(`agreement.allAgree`, true) : form.setValue(`agreement.allAgree`, false)

    return temp
      ? form.setValue('agreement', {
          allAgree: true,
          termsOfUse: true,
          termsOfPersonalInfo: true,
          termsOfMarketing: true,
          termsOfAge: true,
        })
      : form.setValue('agreement', {
          allAgree: false,
          termsOfUse: false,
          termsOfPersonalInfo: false,
          termsOfMarketing: false,
          termsOfAge: false,
        })
  }

  return (
    <>
      <FormField
        control={form.control}
        name="agreement"
        render={() => (
          <FormItem className="space-y-5">
            <div className="border-b-2 border-b-grayscale-50 pb-5">
              <FormLabel className="text-title-sm">이용약관동의</FormLabel>
              <FormField
                control={form.control}
                name={'agreement.allAgree'}
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-row items-start">
                      <FormControl>
                        <Checkbox
                          className="hidden"
                          checked={field.value}
                          onCheckedChange={(checked) => handleAllCheck(checked)}
                        />
                      </FormControl>
                      <FormLabel className="flex gap-[14px] items-center text-title-md">
                        <CheckCircleIcon
                          className={cn('text-grayscale-200', {
                            'text-brand-primary-500': form.getValues('agreement.allAgree'),
                          })}
                        />
                        전체 동의합니다
                      </FormLabel>
                    </FormItem>
                  )
                }}
              />
              <FormDescription className="text-body-xs font-normal mt-[10px]">
                선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.
              </FormDescription>
            </div>
            <div className="flex flex-col pt-5 gap-2">
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name={`agreement.${item.id}`}
                  render={({ field }) => {
                    return (
                      <FormItem key={item.id} className="flex flex-row items-start space-y-0">
                        <FormControl>
                          <Checkbox
                            className="hidden"
                            checked={field.value}
                            onCheckedChange={(checked) => handleAllAgree(checked, `agreement.${item.id}`)}
                          />
                        </FormControl>
                        <FormLabel className="flex items-center text-body-base">
                          <CheckCircleIcon
                            className={cn('text-grayscale-200 mr-[14px]', {
                              'text-brand-primary-500': form.getValues(`agreement.${item.id}`),
                            })}
                          />
                          {item.label}
                          <span className="text-grayscale-200">{item.require ? '(필수)' : '(선택)'}</span>
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
            </div>
          </FormItem>
        )}
      />
    </>
  )
}
