const Type = (props) => {
   //전달하는 데이터 타입 목록
   console.log(props)
   const { str, num, bool, arr, json, func } = props
   return (
      <div>
         <p>StringProps:{str}</p>
         <p>NumberProps:{num}</p>
         {/* bool,arr,json 타입은 문자열로 변경해야 '화면출력'에 사용할 수 있다. */}
         <p>BooleanProps:{bool.toString()}</p>
         <p>ArrayProps:{arr.toString()}</p>
         <p>JsonProps:{JSON.stringify(json)}</p>
         {/* 함수는 전달하니까 자꾸 실행해서 주석처리함. 전달을 안한다고 생각해야할듯 */}
         <p>FunctionProps:{func}</p>
      </div>
   )
}
export default Type
