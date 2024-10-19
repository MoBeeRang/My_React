function IterationSample2() {
   const names = ['눈사람', '얼음', '눈', '바람']
   // 리엑트로 반복하여 요소를 만들어낼때는 key값을 부여해야한다. (key라는 단어가 약속어인지는 모르겄음.) key->요소들을 구분하기 위한 것. 하지만 브라우저 개발화면에서는 Elements에는 key라는게 보이지는 않는다.
   const nameList = names.map((name, idx) => <li key={idx}>{name}</li>)

   return <ul>{nameList}</ul>
}

export default IterationSample2
