import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import React, { useState, useRef, useCallback } from 'react'

/*
ch07을 수행하기 위해 필요한 라이브러리들 설치하기~~
npm install react-icons
npm install classnames

확인방법
package.json에 
해당 디펜던시 등록 되어있는지 확인하면 됨. (경로 잘 보고 깔자;)
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

   //고유 값으로 사용 될 id
   //ref를 사용하여 변수 담기
   const nextId = useRef(4)

   //할 일 등록
   const onInsert = useCallback(
      (text) => {
         const todo = {
            id: nextId.current,
            text, //text:text를 생략한 버전, key이름이랑 값의 변수명과 같으면 하나로 써도 됨
            checked: false,
         }
         setTodos(todos.concat(todo))
         nextId.current += 1 //nextId 1씩 더하기
      },
      [todos] //얘도 status 변경되니까 잡아주면 좋음. useCallback은 react에 대한 이해도가 깊어야 사용할 수 있다고 한다. 컴포넌트 안에서 사용되는 것들은 항상 재랜더링 되기때문에 사용하는것이다.
   )

   //할 일 삭제
   const onRemove = useCallback(
      (id) => {
         setTodos(
            todos.filter((todo) => {
               return todo.id !== id
            })
         )
      },
      [todos] //얘도 status 변경되니까 잡아주면 좋음. useCallback은 react에 대한 이해도가 깊어야 사용할 수 있다고 한다. (me:: 예를들어 재랜더링 될때 굳이 해주지 않아도 될 것들을 한다던지(최적화문제), 해야할걸 막아놔서 값을 못불러온다던지(큰일나는 문제) 하는것들을 말하는듯)컴포넌트 안에서 사용되는 것들은 항상 재랜더링 되기때문에 사용하는것이다.
   )

   //할 일 완료, 미완료
   const onToggle = useCallback(
      (id) => {
         const toggleTodos = todos.map((todo) => {
            // todo들 중, id에 해당하는 객체를 만나면 checked를 반대로 바꿔서 덮어써준다.
            return todo.id === id ? { ...todo, checked: !todo.checked } : todo
         })
         //me:: todos를 update시켜서 자식컴포넌트가 뚜따뚜따하게 해준다.
         setTodos(toggleTodos)
      },
      [todos]
   )

   return (
      <TodoTemplate>
         {/* TodoInsert는 onInsert가 발생 시 onInsert 함수를 props로 전달함 */}
         <TodoInsert onInsert={onInsert} />
         {/* todoList는 todos 값을 props로 전달함, 함수도 내부를 구성하는 컴포넌트에 전달할거기 떄문에 마찬가지로 props로 전달함. */}
         <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
   )
}
export default App
