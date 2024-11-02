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
const ReactButton = (props) => {
   return <button>{props.children}</button>
}
//리액트 전통 방식으로 만든 버튼에 감싸기(wrapping) 적용해보기
//=> 리액트 컴포넌트를 스타일드에 넣어도 적용되지 않음 XX다음 ReactButton5.js에서 해답확인할것.
const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`
function ReactButton4() {
   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>ReactLarge</ReactLargeButton>
      </div>
   )
}

export default ReactButton4
