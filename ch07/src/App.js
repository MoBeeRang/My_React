import logo from './logo.svg'
import './App.css'

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
               Learn React
            </a>
         </header>
      </div>
   )
}
/*
ch07을 수행하기 위해 필요한 라이브러리들 설치하기~~
npm install react-icons
npm install classnames

확인방법
package.json에 
디펜던시 등록 되어있는지 확인하면 됨. 
*/
export default App
