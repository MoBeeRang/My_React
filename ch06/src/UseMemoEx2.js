import React, { useState, useMemo } from 'react'
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
function UseMemoEx2() {
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
   //중요!)list state 가 바뀔때만 기억해둔 getAverage() 함수를 실행하겠다는 뜻, 최적화 기능.
   //const avg = useMemo(()=>{}, [list])
   const avg = useMemo(() => getAverage(list), [list])
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
            <b>평균값:{avg}</b>
         </div>
      </div>
   )
}

export default UseMemoEx2
