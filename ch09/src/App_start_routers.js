import { Route, Routes, Link } from 'react-router-dom'

//라우터 설치 npm install react-router-dom
//라우터는 a태그랑 비슷한 역할을 하고, a태그는 전체 페이지 새로고침, 라우터는 컴포넌트 새로고침이다.
//반드시 최상위 컴포넌트(index.js에 위치)에서 감싸주는 작업 필요.

function Home() {
   return (
      <div>
         <h2>Home</h2>
         Home...
      </div>
   )
}

function Topics() {
   return (
      <div>
         <h2>Topics</h2>
         Topics...
      </div>
   )
}

function Contact() {
   return (
      <div>
         <h2>Contact</h2>
         Contact...
      </div>
   )
}

function App() {
   return (
      <div>
         <h1>리액트 라우터</h1>
         {/* <ul>
            <li>
               <a href="/">Home</a>
            </li>
            <li>
               <a href="/topics">Topics</a>
            </li>
            <li>
               <a href="/contact">Contact</a>
            </li>
         </ul> */}
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/topics">Topics</Link>
            </li>
            <li>
               <Link to="/contact">Contact</Link>
            </li>
         </ul>
         {/* path에 해당하는 주소가 올 경우, element에 설정한 컴포넌트를 보여줌. 위치는 <Routes/>다. 
         사용의의: spa방식(싱글페이지어플어쩌구)으로 구현하기 위함.
         아래의 소스는 주소의 경로에 따라서 보여줄 컴포넌트를 지정하는 코드다. 지정하지 않은 경로진입시에 아무것도 안보임(default)
         경로를 /*로 할 경우, 그외 주소(오류) 처리할 내용을 출력한다. */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/contact" element={<Contact />} />
            {/* 지정한 경로외에 다른 모든 경로는 Not Found */}
            <Route path="/*" element={'Not Found'} />
         </Routes>
      </div>
   )
}

export default App
