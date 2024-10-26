import { Route, Routes, NavLink, useParams } from 'react-router-dom'
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

function Contact() {
   return (
      <div>
         <h2>Contact</h2>
         Contact...
      </div>
   )
}

var contents = [
   { id: 1, title: 'HTML', description: 'HTML is...' },
   { id: 2, title: 'JS', description: 'JS is...' },
   { id: 3, title: 'React', description: 'React is...' },
]

function Topic() {
   var params = useParams() //경로 파라메터를 가져온다.
   var topic_id = params.topic_id //마치 request 파라미터마냥 가져와 쓰는거시다...
   var selected_topic = {
      title: 'Sorry',
      description: 'Not Found',
   }
   for (var i = 0; i < contents.length; i++) {
      if (contents[i].id === Number(topic_id)) {
         selected_topic = contents[i]
         break
      }
   }
   return (
      <div>
         <h3>{selected_topic.title}</h3>
         {selected_topic.description}
      </div>
   )
}

function Topics() {
   var lis = []
   for (var i = 0; i < contents.length; i++) {
      lis.push(
         <li key={contents[i].id}>
            <NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink>
         </li>
      )
   }
   return (
      <div>
         <h2>Topics</h2>
         <ul>{lis}</ul>
         <Routes>
            {/* :변수명 으로 설정하면 어떤 주소를 쓰고오면 해당 변수로 들어가서 저장되어 사용된다. import useParams*/}
            <Route path="/:topic_id" element={<Topic />} />
         </Routes>
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
            <Route path="/topics/*" element={<Topics />} />
            <Route path="/contact" element={<Contact />} />
            {/* 지정한 경로외에 다른 모든 경로는 Not Found */}
            <Route path="/*" element={'Not Found'} />
         </Routes>
      </div>
   )
}

export default App
