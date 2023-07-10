import classNames from 'classnames';
import { memo, useState } from 'react';
import ScrollView from './components';
const Login = memo(() => {
  const [list, setList] = useState(['YYDS', '易烊千玺', '李易峰', '鸡哥', '古巨基', '罗志祥', '肖站', '彭于晏'])
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div id="danmu-container">
      <ScrollView selectorIndex={currentIndex}>
        {
          list.map((item, index) => {
            return (
              <div className='item' key={item} onClick={() => setCurrentIndex(index)}>
                <div className={classNames('tab-item', currentIndex === index ? 'active' : '')}>{item}</div>
              </div>
            )
          })
        }
      </ScrollView>
    </div>
  )
})

export default Login 