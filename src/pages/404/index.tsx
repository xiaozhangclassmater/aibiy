import NotFundImage from '@/assets/img/404/404.png'
import { memo } from 'react'
import { NotFundWapper } from './style'
const NotFund = memo(() => {
  return (
    <NotFundWapper>
      <img src={NotFundImage} alt="" />
    </NotFundWapper>
  )
})

export default NotFund