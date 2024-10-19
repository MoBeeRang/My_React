import './css/TodoInsert.css'
import { IoMdAddCircleOutline } from 'react-icons/io'
import React, { useState, useCallback } from 'react'

//onInsert 함수 받음, app.js에서 만들었음
function TodoInsert({ onInsert }) {
   const [value, setValue] = useState('')
   const onChange = useCallback((e) => {
      setValue(e.target.value)
   }, [])
   const onSubmit = useCallback(
      (e) => {
         onInsert(value)
         setValue('')
         // form태그에서 submit하면 전송하려고 하기떄문에 submit 기본 이벤트 중지시킴 (새로고침 방지)
         e.preventDefault()
      },
      [value, onInsert] //onInsert도 state를 사용하므로 바뀔때 같이 변경되야 함 (me::함수를 쓴다는게 흥미롭다..)
   )
   return (
      <form className="TodoInsert" onSubmit={onSubmit}>
         <input placeholder="할 일을 입력하세요." value={value} onChange={onChange} />
         <button type="submit">
            <IoMdAddCircleOutline />
         </button>
      </form>
   )
}

export default TodoInsert
