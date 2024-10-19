import './css/TodoListItem.css'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md'

function TodoListItem({ todo }) {
   const { id, text, checked } = todo
   return (
      // https://react-icons.github.io/react-icons/
      // 리엑트 아이콘 공식 지원 사이트
      <div className="TodoListItem">
         <div className="checkbox">
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
         </div>
         <div className="remove">
            <MdRemoveCircleOutline />
         </div>
      </div>
   )
}

export default TodoListItem
