import { queryEntireRoomInfo } from '@/api/Home'
import { useRequest } from '@/hooks'
import { memo } from 'react'
import EntireFilter from './components/EntireFilter'
import EntirePagination from './components/EntirePagination'
import EntireRooms from './components/EntireRooms'
import { EntireWapper } from './style'

const Entrie = memo(() => {
  const { data } = useRequest<EntireRoomsInfo>(queryEntireRoomInfo , {
    config : {
      url : 'api/entire/list',
      params : {
        size : 20,
        offset : 0
      }
    }
  })
  console.log('data' ,data);
  return (
   <EntireWapper>
    <EntireFilter/>
    <EntireRooms/>
    <EntirePagination/>
   </EntireWapper>
  )
})

export default Entrie