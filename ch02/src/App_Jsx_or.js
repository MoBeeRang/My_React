function App() {
   //4. ||연산
   // A || B => A가 ture면 A, A가 false면 B를 씀.
   //const name = undefined
   const name = '안녕하세요'
   return <div>{name || '리액트'}</div>
}

export default App
