import { MdClose, MdOutlineShoppingCart } from 'react-icons/md'
import { RiKakaoTalkFill } from 'react-icons/ri'

export function KakaoIcon({ ...props }) {
  return <RiKakaoTalkFill {...props} />
}

export function CloseIcon({ ...props }) {
  return <MdClose {...props} />
}

export function ShoppingBagIcon({ ...props }) {
  return <MdOutlineShoppingCart {...props} />
}
