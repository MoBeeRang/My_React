import { Route, Routes, NavLink } from 'react-router-dom'
import './AppNavLink.css'
// NavLink는 NavLink로 설정한 곳에 class 에 active를 자동으로 붙여준다.

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
         <ul>
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/topics">Topics</NavLink>
            </li>
            <li>
               <NavLink to="/contact">Contact</NavLink>
            </li>
         </ul>

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
