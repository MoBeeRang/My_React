import PropTypes from 'prop-types' //import 이름을 반드시 PropTypes로 쓰고 사용할것. props들의 조건을 설정할 수 있다.
const MyComponent = (props) => {
   //*중요)props는 json 객체이다.
   //json객체이므로 비구조화 할당이 가능하다.

   let { name, job, forNumber, children } = props

   console.log(props)
   return (
      <div>
         <div>안녕하세요. 제 이름은 {name} 입니다.</div>
         <div>제 직업은 {job} 입니다.</div>
         <div>전달받은 숫자는 {forNumber} 입니다.</div>
         <div>children 값은 {children}</div>
      </div>
   )
}
//props 기본값 설정 (json으로 설정), keyname의 값이 넘어오지 않으면 기본값으로 세팅된다.
MyComponent.defaultProps = {
   name: '기본이름',
   job: '기본직업',
}
//주의) 자동완성되는 prototype아니니까 조심
//**주의) 컴포넌트 안에 propTypes와 import한 PropTypes는 다르다.
MyComponent.propTypes = {
   name: PropTypes.string,
   forNumber: PropTypes.number.isRequired,
}
export default MyComponent
