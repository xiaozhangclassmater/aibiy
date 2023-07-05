import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'
import { memo, useState } from 'react'
import { EntireFilterWapper } from './style'

const EntireFilter = memo(() => {
  const [ names, setCurrentName] = useState<string[]>([])
  const setFilterBtn = (name : string) => {
    if(names?.includes(name)) {
      setCurrentName(names.filter(item => item !== name))
    }else{
      setCurrentName([...names , name])
    }
    
  }
  return (
   <EntireFilterWapper>
    {
      filterData.map((item , index) => {
        return (
          <div onClick={() => setFilterBtn(item)} className={classNames('filter-btn-item' ,{'active-item' : names?.includes(item)})}  key={index} >{item}</div>
        )
      })
    }
   </EntireFilterWapper>
  )
})

export default EntireFilter