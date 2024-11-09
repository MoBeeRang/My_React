import { createSlice } from '@reduxjs/toolkit'
//툴킷에서 가져오는 함수를 사용해야한다.
const counterSlice = createSlice({
   name: 'counterSlice', //slice이름 지정(slice는 여러개이므로 구분하여 작성)
   initialState: { value: 0 }, //state의 초기값.
   reducers: {
      //up, down같은건 객체에 들어가는 함수고, 여기서는 action함수라고 한다.
      //action은 createSlice를 통해 '예약어'로 자동생성된다. type, payload 가 생성된다.
      up: (state, action) => {
         //큰 차이점:: 기존 리덕스에선 리턴을 하지만 툴킷은 return하지 않고 그냥 state에 값을 재정의함.
         state.value += action.payload
      },
      down: (state, action) => {
         state.value -= action.payload
      },
   },
})
//리듀서를 내보냄. counterSlice의 reducers를 내보낸다는 말인데, 복수-> 단수형에 주의할것!
export default counterSlice.reducer

//counterSlice의 reducers안의 up, down에 해당하는 함수를 내보낸다는 뜻.
export const { up, down } = counterSlice.actions
