//툴킷을 쓸때도 디스패쳐와 셀렉터는 react-redux걸 사용한다.
//별세개:: 상태관리하는 것들이 많다. 지금은 툴킷을 배우지만, recoil, react query 같은것도 배워보는것을 추천한다. (툴킷보다 쉽다)
import { useDispatch, useSelector } from 'react-redux'
//툴킷에서 지원하는 슬라이스안의 액션함수(export한)들을 가져오자.
import { up, down } from './counterSlice'
function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((state) => {
      console.log(state)
      //counter는 store에 지정한 slice 키 값이다. 수행하는 은행 직원 이름과 같다고 생각하면 될듯.
      return state.counter.value
   })
   return (
      <div>
         <button
            onClick={() => {
               //중요 포인트! dispatch에 전달하는건 정의된 action함수이름과 매개변수다
               dispatch(up(2))
            }}
         >
            +
         </button>
         <button
            onClick={() => {
               dispatch(down(2))
            }}
         >
            -
         </button>
         {count}
      </div>
   )
}

export default Counter
