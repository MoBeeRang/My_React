import React, { Component } from 'react' //리액트에서 제공하는 Component 를 사용한다는 이야기임. render()를 사용하기 위해 임포트하는거임.
import './App.css'

class ClassApp extends Component {
   //extends Component:: Component 클래스를 상속받아 쓰겠다는 뜻
   render() {
      const name = 'react'
      return <div>{name}</div>
   }
}
export default ClassApp
