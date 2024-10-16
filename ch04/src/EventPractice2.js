import React, { useState } from 'react'

function EventPractice2() {
   //input창이 여러개인 경우는 state를 한꺼번에 관리해야한다->json객체로 관리
   //하나의 form state를 가지고 여러개의 값을 관리
   const [form, setForm] = useState({
      username: '',
      message: '',
   })
   //비구조화 할당을 통해 form state 안의 값을 할당
   //username:'', message:''
   const { username, message } = form

   //사용자가 입력한 값을 가져와서 state값을 업데이트 한다.
   const onChange = (e) => {
      const nextForm = {
         ...form, //기존 form 내용을 복사한 뒤
         [e.target.name]: e.target.value, //덮어쓰기가 일어난다
      }
      setForm(nextForm) //덮어씌운 값으로 상태변화시킴
   }

   const onClick = (e) => {
      console.log('e:' + e)
      alert('첫번째 입력값: ' + username + ', 두번째 입력값: ' + message)
      //json 형태초기화
      setForm({ username: '', message: '' })
   }
   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onClick()
      }
   }
   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChange} onKeyDown={onKeyDown} />
         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChange} onKeyDown={onKeyDown} />
         <button onClick={onClick}>확인</button>
      </div>
   )
}

export default EventPractice2
