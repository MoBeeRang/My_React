//state를 사용하기 위해 반드시 import :useStat는 이미 react에서 만들어진 함수다
import React, { useState } from 'react'
const Say1 = () => {
   //state: 컴포넌트 내부에서 바뀌는 값(중요), 여러개 만들 수 있다.
   //message::state를 저장하는 변수,
   //setMessage:: state의 값을 바꾸는 함수
   //이것도 결국 비구조화 할당을 하는 셈이다(배열할당)
   //state가 변화하면 컴포넌트가 reload 하기때문에(중요) console.log가 두번찍히게 된다.
   const [message, setMessage] = useState('초기값')
   const [color, setColor] = useState('black')
   console.log(message)
   //입장버튼용 함수
   const onClickEnter = () => {
      //state값 변경
      setMessage('안녕하세요') //컴포넌트가 reload됨
   }
   //퇴장버튼용 함수 (사용코드 한줄이므로 간단하게 한줄로 표현해도 됨)
   const onClickLeave = () => setMessage('안녕히가세요') //컴포넌트가 reload됨
   return (
      <div>
         {/* 함수 연결해서 사용 */}
         <button onClick={onClickEnter}>입장</button>
         <button onClick={onClickLeave}>퇴장</button>
         <h1 style={{ color }}>{message}</h1>
         {/* 함수를 태그내부에 선언하는 방법 */}
         <button
            onClick={() => {
               setColor('red')
            }}
         >
            빨강
         </button>
         <button
            onClick={() => {
               setColor('green')
            }}
         >
            초록
         </button>
         <button
            onClick={() => {
               setColor('blue')
            }}
         >
            파랑
         </button>
      </div>
   )
}

export default Say1
