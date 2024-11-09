import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import userSlice from './userSlice'
const store = configureStore({
   reducer: {
      counter: counterSlice, //counterSlice를 store에 저장, 여러개의 슬라이스(리듀서)들을 등록 할 수 있다. counter는 reducer가 관리하는 키이름 이 된다.
      //보통 슬라이스명은 정의된 슬라이스 내 name값을 사용한다.
      user: userSlice,
   },
})
export default store
