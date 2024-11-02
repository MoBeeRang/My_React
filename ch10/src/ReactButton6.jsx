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

const ReactButton = (props) => {
   return <button className={props.className}>{props.children}</button>
}

//리액트 전통 방식으로 만든 버튼에 감싸기(wrapping) 적용하려면 전통 리액트 컴포넌트에 className속성을 전달받아야 한다. (props.className)
const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`

//styled컴포넌트에 백틱 안에서 ${} 이걸로 감싸면 함수를 사용할 수 있다. 속성 (props)도 사용할 수 있다.
/*const PrimaryButton = styled.button`
   color: ${function (props) {
      console.log(props)
      //primary: true 에 따라 color가 지정된다.
      if (props.primary) return 'white'
      else return 'blue'
   }};
`*/
//styled컴포넌트에 백틱 안에서 ${} 이걸로 감싸면 함수를 사용할 수 있다. 속성 (props)도 사용할 수 있다.
// &: 에서 &은 스타일트 컴포넌트 백틱안에서 현재 컴포넌트를 의미한다.
//&은 가상클래스(:hover, :focus, :active) 와 결합하여 사용할 수 있다.
//&은 가상요소(::before, ::after) 선택자들과 결합하여 사용할 수 있다.
//스타일드 컴포넌트 사용법을 익히면 다른 라이브러리 익히기가 수월하다.
const PrimaryButton = styled.button`
   color: ${(props) => (props.primary ? 'white' : 'blue')};
   background-color: ${(props) => (props.primary ? 'orange' : 'skyblue')};

   &:hover {
      background-color: ${(props) => (props.primary ? 'darkblue' : 'darkgray')};
   }
`
function ReactButton6() {
   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>ReactLarge</ReactLargeButton>
         <PrimaryButton>Normal1</PrimaryButton>
         {/* 컴포넌트에 속성을 부여할 때 값이 없는 상태로 이름만 보내면 true값이 기본 세팅된다. ex) primary : true */}
         <PrimaryButton primary>Normal2</PrimaryButton>
      </div>
   )
}

export default ReactButton6
