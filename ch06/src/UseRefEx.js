import React, { useRef } from 'react'

//UseRef는 직접적인 Dom조작이 필요할 때 사용한다. input 포커스, 스크롤박스 조작, canvas로 그릴때 등
function UseRefEx() {
   const inputRef = useRef(null) //직접 다루고 싶은 요소에 이 useRef를 ref속성에 부여하면 연결됨
   const handleClick = () => {
      inputRef.current.focus() //input 요소에 포커스, 직접 dom을 다루는 곳
   }
   return (
      <div>
         <input ref={inputRef} type="text" />
         <button onClick={handleClick}>focus</button>
      </div>
   )
}

export default UseRefEx
