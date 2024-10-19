import './css/TodoList.css'
import TodoListItem from './TodoListItem'
function TodoList({ todos }) {
   return (
      <div className="TodoList">
         {/* 언제나 말하지만 JSX로는 객체가져올땐 리턴이 소괄호임() */}
         {todos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} />
         ))}
      </div>
   )
}

export default TodoList
