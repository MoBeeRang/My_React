import './css/TodoTemplate.css'
//children props는 <TodoList />와 <TodoInsert /> 컴포넌트를 가지고 있다.
function TodoTemplate({ children }) {
   return (
      <div className="TodoTemplate">
         <div className="app-title">TODO LIST</div>
         {/* 요 아래 추가된게 app.js에서 받은 자식 컴포넌트들이다. 컴포넌트도 prop로 전달할 수 있다*/}
         <div className="content">{children}</div>
      </div>
   )
}

export default TodoTemplate
