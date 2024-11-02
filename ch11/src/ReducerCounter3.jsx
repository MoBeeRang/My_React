import React, { useReducer, useState } from 'react'

function ReducerCounter3() {
   const [number, setNumber] = useState(1)
   const [count, conutDispatch] = useReducer(countReducer, 0)

   //action은 String으로 받거나 JSON객체로 받을 수 있다. 여러 설정값을 받으려면 JSON객체를 사용하면 된다.
   //countDispatch에 넣을때 매개변수로 json객체를 넣으면 된다.
   function countReducer(oldCount, action) {
      console.log(action)
      if (action.type === 'UP') {
         return oldCount + action.number
      } else if (action.type === 'DOWN') {
         return oldCount - action.number
      } else if (action.type === 'RESET') {
         return 0
      }
   }

   const down = () => conutDispatch({ type: 'DOWN', number: number })
   const reset = () => conutDispatch({ type: 'RESET', number: number })
   const up = () => conutDispatch({ type: 'UP', number: number })

   const changeNumber = (e) => setNumber(Number(e.target.value))
   return (
      <>
         <input type="button" value="-" onClick={down} />
         <input type="button" value="0" onClick={reset} />
         <input type="button" value="+" onClick={up} />

         <br />
         <input type="text" value={number} onChange={changeNumber} />
         <br />
         <span>{count}</span>
      </>
   )
}

export default ReducerCounter3
