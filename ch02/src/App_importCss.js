import './App.css'
function App() {
   //5. class가 아닌 className을 사용한다. jsx문법. id도 쓸 수 없고 오로지 class만 사용해서 css를 입힐 수 있다.
   const name = '리액트'
   return <div className="react">{name}</div>
}

export default App
