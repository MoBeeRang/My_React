//중요! react는 컴포넌트가 아닌 ***Hook을 만들 경우, 이름은 '소문자'로 시작을 한다.
//컴포넌트는 파일명이 대문자로 시작한다.
import React, { useState } from 'react'
function useToggle(initialValue) {
   const [value, setValue] = useState(initialValue)
   const toggle = () => {
      setValue(!value)
   }
   return [value, toggle]
}

export default useToggle
