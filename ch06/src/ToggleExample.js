import React, { useState } from 'react'

//커스텀 훅도 똑같이 임포트 해준다.
import useToggle from './useToggle'

function ToggleExample() {
   //isToggled = false
   //toggle = toggle() 함수가 들어있음.
   const [isToggled, toggle] = useToggle(false)

   return (
      <div>
         <button onClick={toggle}>{isToggled ? '끄기' : '켜기'}</button>
         {isToggled && <p>토글 상태가 켜져있습니다</p>}
      </div>
   )
}

export default ToggleExample
