import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import React, { useState } from 'react'

/*
ch07을 수행하기 위해 필요한 라이브러리들 설치하기~~
npm install react-icons
npm install classnames

확인방법
package.json에 
해당 디펜던시 등록 되어있는지 확인하면 됨. 
*/
function App() {
   const [todos, setTodos] = useState([
      {
         id: 1,
         text: '헬스장 가기',
         checked: true,
      },
      {
         id: 2,
         text: '점심약속',
         checked: true,
      },
      {
         id: 3,
         text: '리액트 복습',
         checked: false,
      },
   ])
   return (
      <TodoTemplate>
         <TodoInsert></TodoInsert>
         <TodoList todos={todos}></TodoList>
      </TodoTemplate>
   )
}
export default App
