import { Pagination } from 'antd'
import { memo } from 'react'
import { EntirePaginationWapper } from './style'

interface EntirePaginationProps {
  currentPage : number,
  total : number,
  changeHandle : (page: number, pageSize: number) => void
}

const EntirePagination = memo(( { currentPage = 1 , total ,changeHandle } : EntirePaginationProps ) => {
  return (
    <EntirePaginationWapper>
      <Pagination defaultCurrent={currentPage} pageSize={20} total={total} onChange={(page , pageSize) => changeHandle(page , pageSize)} showSizeChanger={false} />
    </EntirePaginationWapper>
  )
})

export default EntirePagination