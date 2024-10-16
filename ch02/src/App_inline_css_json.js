function App() {
   //4. CSS, 인라인스타일= >json객체 사용
   const name = '리액트'
   //json객체여도 웹팩 안에서 알아서 css로 변환해준다.
   //주의* 리액트에서 json으로 인라인스타일 css주려면 카멜 표기법을 사용해야한다.
   //기본 표기법은 케밥 표기법이다.(꼬챙이에 꿴 모양, 모두 소문자+문자열사이에 대쉬 '-'사용하는 표기법)
   //json객체기때문에 값은 홑따옴표로 감싼 '문자열' 로 쓰거나, px를 생략하여 숫자타입으로 써줘야 한다. ex) '16px' or 16
   const style = {
      backgroundColor: 'red',
      color: 'black',
      fontSize: '48px',
      padding: 16,
   }
   //return <div style={style}>{name}</div> // 이것과 이 아래것은 같은 효과를 낸다. 내용을 직접 집어넣은것과 같다.
   return (
      <div
         style={{
            backgroundColor: 'red',
            color: 'black',
            fontSize: '48px',
            padding: 16,
         }}
      >
         {name}
      </div>
   )
}

export default App
