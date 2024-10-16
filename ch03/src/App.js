//경로에 확장자('./FumcApp.js'의 .js)는 안써도 알아서 가져온다고 한다.
// import ClassApp from './ClassApp'
//import FuncApp from './FuncApp'
// import MyComponent from './MyComponent'
// import Say1 from './Say1'
import InputText from './InputText'
// import Type from './Type'
function App() {
   //return <FuncApp />
   // return <ClassApp />
   //return <MyComponent name="혜원" /> //속성key값은 아무렇게나 지어도된다.
   //1)return <MyComponent name="혜원"></MyComponent> 이렇게 써도 된다.
   //2)return <MyComponent name="혜원">맑음</MyComponent>: 1)을 이용해서 이렇게 값을 전달 할 수도 있다.
   // return <MyComponent>맑음</MyComponent> //3)컴포넌트 사이에 주는 값은 children 이라는 이름으로 전달한다.
   //3-1)숫자는 중활호를 써서 전달해야한다.ex) num = {2}
   // return (
   //    <Type
   //       str="react"
   //       num={200}
   //       bool={1 == 1}
   //       arr={[0, 1, 2]}
   //       json={{ react: '리액트', time: 2 }}
   //       // func={alert('Hello function Props!')}
   //    />
   // )
   // return <Say1></Say1>
   return <InputText />
}

export default App
