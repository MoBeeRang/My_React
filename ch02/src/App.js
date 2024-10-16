import './App.css'
function App() {
   //6. 닫는 태그가 반드시 있어야 한다
   const name = '리액트'
   //짝꿍이 없는 태그 input이나 br은 />를 쓰거나 닫는 태그를 써야 한다. ** 예를들어 <input type="text"> 로 사용할 수 없음.
   //return문 안의 주석은 다르게 쓴다 {/* 내용 */} 로 씀
   return (
      <>
         <div className="react">{name}</div>
         <input type="text" />
         <input type="text"></input>
      </>
   )
}

export default App
