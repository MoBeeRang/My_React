function App() {
   return (
      //1. 반드시 부모요소로 감싸야 한다. 태그 하나만 있으면 괜찮음. 두개이상일때는 꼭 감싸야 함(보통 div씀, 시멘틱 태그로 감싸도 상관없음)
      //<> 심지어 이렇게 비어있는 꺽쇄도 사용가능. 프레그먼트 fragment라고 함.
      <>
         <h1>리액트</h1>
         <h2>리액트 안녕!</h2>
      </>
   )
}

export default App
