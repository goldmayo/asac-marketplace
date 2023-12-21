import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { CartItem, ProductType } from '@/types/product'

type CartStore = {
  cart: CartItem[]
  selectedItems: () => CartItem[]
  price: () => number
  discountPrice: () => number
  count: () => number
  selectedCount: () => number
  add: (product: ProductType) => void
  select: (idProduct: number) => void
  selectAll: (value: boolean) => void
  remove: (idProduct: number) => void
  removeSelectedItem: () => void
  removeItem: (idProduct: number) => void
  removeAll: () => void
}

const DUMMY_CART_ITEMS: CartItem[] = [
  {
    id: 1,
    name: '[누터스가든] CAT 누터스픽 짜먹는 간식 2종',
    brand: '누터스가든',
    discountRate: 35,
    discountedPrice: 4485,
    itemPrice: 6900,
    promotionUrl: '/images/hotdog.svg',
    reviewCount: 80,
    count: 2,
    selected: false,
  },
  {
    id: 2,
    name: '[누터스가든] DOG 누터스픽 짜먹는 간식 2종',
    promotionUrl: '/images/ricedog.svg',
    discountRate: 35,
    discountedPrice: 4485,
    itemPrice: 6900,
    reviewCount: 80,
    brand: '누터스가든',
    count: 1,
    selected: false,
  },
]

export const useCartStore = create<CartStore>()(
  devtools((set, get) => ({
    cart: [...DUMMY_CART_ITEMS],
    // cart: [],
    selectedItems: () => {
      const { cart } = get()
      if (cart.length) return cart.filter((item) => item.selected === true)
      return []
    },
    price() {
      const { cart } = get()
      const items = cart.filter((item) => item.selected === true)
      if (items.length)
        return items.map((item) => item.discountedPrice * item.count).reduce((prev, curr) => prev + curr)
      return 0
    },
    discountPrice() {
      const { cart } = get()
      const items = cart.filter((item) => item.selected === true)
      if (items.length)
        return items
          .map((item) => (item.itemPrice - item.discountedPrice) * item.count)
          .reduce((prev, curr) => prev + curr)
      return 0
    },
    count: () => {
      const { cart } = get()
      if (cart.length) return cart.map((item) => item.count).reduce((prev, curr) => prev + curr)
      return 0
    },
    selectedCount() {
      const { cart } = get()
      if (cart.length) return cart.filter((item) => item.selected === true).length
      return 0
    },
    add: (product: ProductType) => {
      const { cart } = get()
      const updatedCart = updateCart(product, cart)
      set({ cart: updatedCart })
    },
    select(idProduct: number) {
      const { cart } = get()
      const updatedCart = updateSelectfield(idProduct, cart)
      set({ cart: updatedCart })
    },
    selectAll(value: boolean) {
      const { cart } = get()
      const updatedCart = toggleAllCartItem(value, cart)
      set({ cart: updatedCart })
    },
    remove: (idProduct: number) => {
      const { cart } = get()
      const updatedCart = removeCart(idProduct, cart)
      set({ cart: updatedCart })
    },
    removeSelectedItem() {
      const { cart } = get()
      const updatedCart = removeSelected(cart)
      set({ cart: updatedCart })
    },
    removeItem(idProduct: number) {
      const { cart } = get()
      const updatedCart = removeFromCart(idProduct, cart)
      set({ cart: updatedCart })
    },
    removeAll: () => set({ cart: [] }),
  })),
)

function updateCart(product: ProductType, cart: CartItem[]): CartItem[] {
  const cartItem = { ...product, count: 1, selected: false } as CartItem

  const productOnCart = cart.map((item) => item.id).includes(product.id)

  if (!productOnCart) cart.push(cartItem)
  else {
    return cart.map((item) => {
      if (item.id === product.id) return { ...item, count: item.count + 1 } as CartItem
      return item
    })
  }

  return cart
}

function updateSelectfield(idProduct: number, cart: CartItem[]) {
  return cart.map((item) => {
    if (item.id === idProduct) return { ...item, selected: !item.selected }
    return item
  })
}

function toggleAllCartItem(value: boolean, cart: CartItem[]) {
  return cart.map((item) => {
    if (item.selected === !value) return { ...item, selected: value }
    return item
  })
}

function removeCart(idProduct: number, cart: CartItem[]): CartItem[] {
  return cart
    .map((item) => {
      if (item.id === idProduct) return { ...item, count: item.count - 1 }
      return item
    })
    .filter((item) => {
      return item.count
    })
}

function removeFromCart(idProduct: number, cart: CartItem[]): CartItem[] {
  return cart.filter((item) => {
    return item.id !== idProduct
  })
}

function removeSelected(cart: CartItem[]) {
  return cart.filter((item) => {
    return item.selected !== true
  })
}
