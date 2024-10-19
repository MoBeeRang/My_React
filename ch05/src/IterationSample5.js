import React, { useState } from 'react'

function IterationSample5() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])
   const [inputText, setInputText] = useState('')
   const [nextId, setNextId] = useState(5)
   //['눈사람', '얼음', '눈', '바람']
   // 리엑트로 반복하여 요소를 만들어낼때는 key값을 부여해야한다. (key라는 단어가 약속어인지는 모르겄음.) key->요소들을 구분하기 위한 것. 하지만 브라우저 개발화면에서는 Elements에는 key라는게 보이지는 않는다. index번호를 부여하여 key를 줄 수 도 있지만, 기왕이면 id를 따로 만드는것이 낫다고한다.
   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>)
   const onChange = (e) => {
      setInputText(e.target.value)
   }
   //사용자가 입력한 값을 names state에 추가 concat사용 (두 배열을 하나로 합쳐줌)
   const onClick = () => {
      const nextNames = names.concat({
         id: nextId, //5
         text: inputText, //input태그에서 사용자가 입력한 값
      })
      setNames(nextNames)
      setNextId(nextId + 1)
      setInputText('')
   }
   return (
      <>
         <input value={inputText} onChange={onChange} />
         <button onClick={onClick}>추가</button>
         <ul>{nameList}</ul>
      </>
   )
}

export default IterationSample5
