import React, { useState } from 'react'
import './App.css'
// createStore 에 밑줄표시는 신경쓰지 않아도 된다.
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

//reducer(state이름, 실행타입): 직접적으로 state를 변경해주는 역할
//return타입은 json객체이다.
function reducer(currentState, action) {
   //현재 state가 없다면 number state에 1을 할당. state를 할당하는 곳이라고 보면 될듯.
   if (currentState === undefined) {
      return { number: 1 }
   }
   //현재 state에 데이터가 있따면
   const newState = { ...currentState } //깊은 복사(현재 state의 '값'을 복사(주소X))
   if (action.type === 'PLUS') {
      newState.number++
   }
   return newState //새로운 state를 반영 (이후의 일들은 신경쓰지 않아도 된다.)
}

//store는 state를 저장하고 있는 저장 창고이다. reducer도 저장한다. 창고다.
//리듀서는 스토어(createStore)에 저장해서 사용해야만 한다. (ppt그림 참조할것)
const store = createStore(reducer)

function Left1() {
   return (
      <div>
         <h1>Left1</h1>
         <Left2 />
      </div>
   )
}

function Left2() {
   return (
      <div>
         <h1>Left2:</h1>
         <Left3 />
      </div>
   )
}
function Left3() {
   // useSelector(함수명or 함수) 하면 store에있는 state값을 준다. 부모로부터 받아야 하는 props 사용하지 않고, 어디서든 props를 전달받지 않아도 state값을 무선연결 하듯 가져올 수 있다.
   const number = useSelector((state) => state.number)
   return (
      <div>
         <h1>Left3:{number}</h1>
      </div>
   )
}
function Right1() {
   return (
      <div>
         <h1>Right1</h1>
         <Right2 />
      </div>
   )
}

function Right2() {
   return (
      <div>
         <h1>Right2</h1>
         <Right3 />
      </div>
   )
}

function Right3() {
   //무선으로 요청 전달(store)하기 위해 useDispatch() 를 만든다.
   const dispatch = useDispatch()
   return (
      <div>
         <h1>Right3</h1>
         <input
            type="button"
            value="+"
            onClick={() => {
               dispatch({ type: 'PLUS' })
            }}
         />
      </div>
   )
}
function App() {
   return (
      <div className="container">
         <h1>Root:</h1>
         <div className="grid">
            {/* provider는 store에서 일하는 직원이고, 감싸고있는 컴포넌트들에 store에 저장해 놓은 것들을 제공해준다. */}
            {/* redux로 연결하는 방법 1. reducer만들기 2.store만들어 reducer담기. 3. provider로 제공하기 */}
            {/* ☆★☆★☆★☆★☆★ store를 기준으로 만들어진다. ☆★☆★☆★☆★☆★ */}
            <Provider store={store}>
               <Left1 />
               <Right1 />
            </Provider>
         </div>
      </div>
   )
}

export default App
