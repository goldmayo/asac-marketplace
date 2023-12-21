'use client'

import CartItemCard from '@/components/feature/cart/cartItemCard'
import { useCartStore } from '@/store/client/cartSlice'
import { CartItem } from '@/types/product'

export default function CartItemList() {
  const { cart } = useCartStore()
  return (
    <section className="flex flex-col gap-2 w-full px-5 py-[18px]">
      {cart.map((product: CartItem) => (
        <CartItemCard key={product.id} product={product} />
      ))}
    </section>
  )
}
