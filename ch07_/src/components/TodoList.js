import './css/TodoList.css'
import TodoListItem from './TodoListItem'
function TodoList({ todos, onRemove, onToggle }) {
   return (
      <div className="TodoList">
         {/* 언제나 말하지만 JSX로는 객체가져올땐 리턴이 소괄호임() */}
         {/* mpa으로 반복해서 todos개수만큼 컴포넌트를 만들어준다 */}
         {todos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
         ))}
      </div>
   )
}

export default TodoList
