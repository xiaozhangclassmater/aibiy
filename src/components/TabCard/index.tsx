
import classNames from 'classnames';
import { memo, useEffect, useState } from 'react';
import ScrollView from '../ScrollView';
import { TabCardWapper } from './style';

interface TabCardProps {
  tabList : dest_address_list,
  getProductInfo : (cityName : string) => void
}
/**
 * @description Tab选项卡组件 ， 用于选择某个专栏显示指定数据
 */
const TabCard = memo(( { tabList , getProductInfo } : TabCardProps ) => {
  console.log('父组件render');
  const [ currentIndex , setCurrentIndex ] = useState(0)
  const computedIndex = (index : number) => currentIndex === index;
  useEffect( () => {
    // 获取默认的城市信息
    getProductInfo(tabList[0].name)
  } , [])
  
  const tabItemClickHandle = (index : number , cityName : string) : void => {
    setCurrentIndex(index)
    getProductInfo(cityName)
  }
  return (
    <TabCardWapper>
      <ScrollView>
        {
          tabList.length && 
          tabList.map((item , index) => <div className={classNames('tab-item' ,{ 'active-item' :  computedIndex(index)})}  
          key={index} onClick={() => tabItemClickHandle(index , item.name)}>{item.name}</div>)
        }
      </ScrollView>
    </TabCardWapper>
  )
})

export default TabCard