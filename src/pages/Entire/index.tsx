import { queryEntireRoomInfo } from '@/api/Home'
import { useRequest } from '@/hooks'
import { isEmpty, windowScrollTo } from '@/utils'
import { memo, useEffect, useMemo, useState } from 'react'
import EntireFilter from './components/EntireFilter'
import EntirePagination from './components/EntirePagination'
import EntireRooms from './components/EntireRooms'
import { EntireWapper } from './style'

const Entrie = memo(() => {
  const [pageParams, setPageParams] = useState<EntireRoomInfoparams>({
    size: 20,
    offset: 1
  })
  const { data: roomInfo, refresh, loading: requestRiLoading } = useRequest<EntireRoomsInfo>(queryEntireRoomInfo, {
    config: {
      url: 'api/entire/list',
      params: pageParams
    },
  })
  const cacheRoomInfo = useMemo(() => roomInfo as EntireRoomsInfo, [roomInfo])

  const paginationChangeHandle = (size: number, pageSize: number) => {
    setPageParams({ size: pageSize, offset: size })
  }

  useEffect(() => { windowScrollTo() }, [])

  useEffect(() => { refresh() }, [pageParams])

  return (
    <EntireWapper>
      <EntireFilter />
      <EntireRooms info={cacheRoomInfo} loading={requestRiLoading} />
      {!isEmpty(cacheRoomInfo) && <EntirePagination changeHandle={paginationChangeHandle} currentPage={pageParams?.offset || 1} total={cacheRoomInfo?.totalCount || 10} />}
    </EntireWapper>
  )
})

export default Entrie