export interface deleteWishParams {
  loginId: string
  itemId: number
}

export type WishedArrayType = WishedItemType[]

export interface WishedItemType {
  itemId: number
  itemName: string
  discountRate: number
  saleItemPrice: number
  itemTotalPrice: number
  promotionImageUrl: string
}
