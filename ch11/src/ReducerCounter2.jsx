import React, { useReducer } from 'react'

function ReducerCounter2() {
   //사용법 const [사용할state명, 디스패치명] = useReducer(사용할리듀서함수,state 초기화값)
   const [count, conutDispatch] = useReducer(countReducer, 0)
   //reducer 함수는 state를 바꾸는 역할을 한다.
   //reducer 함수(state 값, 행위)
   //oldCont는 prevstate값이랑 비슷한 역할을 한다.
   //리듀서이름(직전state값, 행동구분)
   function countReducer(oldCount, action) {
      if (action === 'UP') {
         return oldCount + 1
      } else if (action === 'DOWN') {
         return oldCount - 1
      } else if (action === 'RESET') {
         return 0
      }
   }

   const down = () => conutDispatch('DOWN')

   const reset = () => conutDispatch('DOWN')

   const up = () => conutDispatch('UP')

   return (
      <>
         <input type="button" value="-" onClick={down} />
         <input type="button" value="0" onClick={reset} />
         <input type="button" value="+" onClick={up} />
         <span>{count}</span>
      </>
   )
}

export default ReducerCounter2
