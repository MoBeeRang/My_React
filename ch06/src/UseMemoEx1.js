import React, { useState } from 'react'
//평균 구하는 함수
const getAverage = (numbers) => {
   console.log('getAverage실행')
   console.log(numbers)
   //numbers = [1,2,3]
   if (numbers.length === 0) return 0
   // const sum = numbers.reduce((a, b) => {
   //    return a + b
   // })
   const sum = numbers.reduce((a, b) => a + b) //reduce 누적합산
   console.log(sum)
   return sum / numbers.length
}
//컴포넌트 함수
function UseMemoEx1() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')
   const onChange = (e) => {
      setNumber(e.target.value)
   }
   const onInsert = () => {
      const nextList = list.concat(parseInt(number))
      setList(nextList)
      setNumber('')
   }
   return (
      <div>
         <input value={number} onChange={onChange} />
         <button onClick={onInsert}>실행</button>
         <ul>
            {list.map((value, idx) => (
               <li key={idx}> {value}</li>
            ))}
         </ul>
         <div>
            <b>평균값:{getAverage(list)}</b>
         </div>
      </div>
   )
}

export default UseMemoEx1
