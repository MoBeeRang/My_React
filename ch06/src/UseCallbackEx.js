import React, { useState, useMemo, useCallback } from 'react'
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
// ;(e) => {
//    setNumber(e.target.value)
// }
//컴포넌트 함수
function UseCallbackEx() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')

   // 컴포넌트 첫 렌더링때만 생성 (state값을 꺼내쓰진 않아서 딱히 재사용하지 않아도 됨.)
   const onChange = useCallback((e) => {
      setNumber(e.target.value)
   }, [])

   // number,list의 state가 바뀔때만 함수 생성 (state값을 꺼내 가지고 사용하므로 재선언해줘야함)
   const onInsert = useCallback(() => {
      const nextList = list.concat(parseInt(number))
      setList(nextList)
      setNumber('')
   }, [number, list])

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

export default UseCallbackEx
