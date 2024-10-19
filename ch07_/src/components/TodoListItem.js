import './css/TodoListItem.css'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md'
import classnames from 'classnames'
function TodoListItem({ todo }) {
   const { id, text, checked } = todo
   return (
      // https://react-icons.github.io/react-icons/
      // 리엑트 아이콘 공식 지원 사이트
      <div className="TodoListItem">
         {/* className ="checkbox" 변수 checked가 true값을 가지면 변수명 'checked'가 클래스로 추가된다.*/}
         {/* {checked} == {checked:checked} 라서 가능*/}
         {/* falsy나 trusy 값들도 false, true로 적용되어 값이 class명으로 들어가게 됨. */}
         <div className={classnames('checkbox', { checked })}>
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
