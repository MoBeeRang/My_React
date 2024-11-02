import styled from 'styled-components'
//스타일컴포넌트 이용하는 법

//버튼 컴포넌트 생성하는법 styled.태그명`css 스타일 작성`
//얘는 컴포넌트다~! 브라우저에서 확인하면 가상의 이름의 class가 부여됨 ex) sdfsaf <<이런식으루 부여되어있다.
//const StyledButton = styled.button

//버튼에 스타일 주는 법 (백틱 ` 사용)
const StyledButton = styled.button`
   color: white;
   background-color: green;
`

//랩핑하기(감싸기) (기존 스타일드 컴포넌트를 가져와 스타일을 추가하는것)
const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

//리액트 전통 방식으로 컴포넌트 만들기
// const ReactButton = (props) => {
//    console.log(props)
//    return <button>{props.children}</button>
// }

const ReactButton = (props) => {
   //props를 콘솔로 확인해보면 className속성이 있음을 확인 할 수 있고, 해당 속성을 태그에 넣어주어야 한다.
   console.log(props)
   return <button className={props.className}>{props.children}</button>
}

//리액트 전통 방식으로 만든 버튼에 감싸기(wrapping) 적용하려면 전통 리액트 컴포넌트에 className속성을 전달받아야 한다. (props.className)
const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`
function ReactButton5() {
   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>ReactLarge</ReactLargeButton>
      </div>
   )
}

export default ReactButton5
