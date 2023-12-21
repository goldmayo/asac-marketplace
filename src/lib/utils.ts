import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertNumberFormat(number: number) {
  return new Intl.NumberFormat('ko-KR').format(number)
}
