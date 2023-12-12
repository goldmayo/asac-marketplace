import { IoIosArrowDown } from 'react-icons/io'
import { IoOptionsOutline } from 'react-icons/io5'
import { FaRegCheckCircle } from 'react-icons/fa'
import { MdClose, MdOutlineShoppingCart } from 'react-icons/md'
import { RiKakaoTalkFill } from 'react-icons/ri'

export function KakaoIcon({ ...props }) {
  return <RiKakaoTalkFill {...props} />
}

export function CloseIcon({ ...props }) {
  return <MdClose {...props} />
}

export function ArrowDownIcon({ ...props }) {
  return <IoIosArrowDown {...props} />
}

export function OptionsIcon({ ...props }) {
  return <IoOptionsOutline {...props} />
export function ShoppingBagIcon({ ...props }) {
  return <
  {...props} />
}

export function CheckCircleIcon({ ...props }) {
  return <FaRegCheckCircle {...props} />
}
