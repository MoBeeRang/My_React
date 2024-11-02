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

function ReactButton3() {
   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
      </div>
   )
}

export default ReactButton3
