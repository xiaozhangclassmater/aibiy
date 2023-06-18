import { getHomeList } from '@/api/Home'
import { memo, useEffect } from 'react'

const Home = memo(() => {
  const queryHomeList = async () => {
    const res = await getHomeList('/api/home/highscore', {})
    console.log("响应结果", res);
  }
  useEffect(() => {
    queryHomeList()
  }, [])
  return (
    <div>Home</div>
  )
})

export default Home