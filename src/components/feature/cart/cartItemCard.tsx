import Image from 'next/image'

import { CheckCircle, IconMinusMono, IconPlusMono, IconXMono } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { cn, convertNumberFormat } from '@/lib/utils'
import { useCartStore } from '@/store/client/cartSlice'
import { CartItem } from '@/types/product'

interface ICartItemCard {
  product: CartItem
}

export default function CartItemCard({ product }: ICartItemCard) {
  const { add, remove, removeItem, select } = useCartStore()
  return (
    <div className="grid grid-cols-12">
      <Button variant={'none'} size={'checkbox'} className="mr-2 col-span-1" onClick={() => select(product.id)}>
        <CheckCircle
          width={'1.375rem'}
          height={'1.375rem'}
          className={cn('text-grayscale-200 fill-white', {
            'fill-brand-primary-500 text-white': product.selected,
          })}
        />
      </Button>
      <div className="flex flex-col col-span-10 gap-4">
        <span className="text-body-sm line-clamp-2">{product.name}</span>
        <div className="flex h-2/3 gap-4">
          <Image width={70} height={90} src={product.promotionUrl} alt={`${product.name}`} />
          <div className="flex flex-col justify-between">
            <span className="text-body-lg">{convertNumberFormat(product.itemPrice)}원</span>
            <div className="flex justify-between items-center border border-grayscale-100 h-fit w-[90px] h-[30px] rounded-lg">
              <Button variant={'none'} className="px-2 py-2 h-fit" onClick={() => remove(product.id)}>
                <IconMinusMono width={'1rem'} height={'1rem'} className="text-grayscale-400 hover:text-grayscale-900" />
              </Button>
              <span className="text-body-xs">{product.count}</span>
              <Button variant={'none'} className="px-2 py-2 h-fit" onClick={() => add(product)}>
                <IconPlusMono width={'1rem'} height={'1rem'} className="text-grayscale-400 hover:text-grayscale-900" />
              </Button>
            </div>
          </div>
          <Button variant={'none'} className="ml-auto" onClick={() => removeItem(product.id)}>
            <IconXMono width={'1.25rem'} height={'1.25rem'} className="text-grayscale-400 hover:text-grayscale-900" />
          </Button>
        </div>
      </div>
    </div>
  )
}
