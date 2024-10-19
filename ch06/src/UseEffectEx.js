import React, { useState, useEffect } from 'react'

function UseEffectEx() {
   const [name, setName] = useState('')
   const [nickname, setNickname] = useState('')
   const onChangeName = (e) => setName(e.target.value)
   const onChangeNickname = (e) => setNickname(e.target.value)
   //1. 컴포넌트가 렌더링 될때마다 실행 useEffect(() => {})
   //    useEffect(() => {
   //       console.log('////렌더링 실행')
   //       console.log({ name, nickname })
   //    })
   //2. 컴포넌트가 최초 렌더링할때만 실행 useEffect(() => {},[])
   //    useEffect(() => {
   //       console.log('>>>>최초 실행')
   //       console.log({ name, nickname })
   //    }, [])
   //3. 최초 + 특정 state 변경 될때만 실행 useEffect(() => {},[state이름])
   //    useEffect(() => {
   //       console.log('~~~특정 실행')
   //       console.log({ name, nickname })
   //    }, [name])
   //4. 뒷정리함수 포함 실행, return으로 함수를 반환한다. 렌더링 일어나기 전에 실행된다. useEffect(() => { return ()=>{} },[state이름])
   useEffect(() => {
      console.log({ name, nickname })
      console.log('렌더링 후 실행')
      return () => {
         console.log('뒷정리함수 실행')
         console.log(name)
      }
   }, [name])
   return (
      <div>
         <div>
            <input value={name} onChange={onChangeName} />
            <input value={nickname} onChange={onChangeNickname} />
         </div>
         <div>
            <div>
               <b>이름: {name}</b>
            </div>

            <div>
               <b>닉네임: {nickname}</b>
            </div>
         </div>
      </div>
   )
}

export default UseEffectEx
