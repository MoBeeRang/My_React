import './App.css'

function FuncApp() {
   const name = 'react'
   return <div className="react">{name}</div>
}

//export를 달아줘야만 다른페이지에서 FuncApp을 import해서 쓸 수 있다.
export default FuncApp
