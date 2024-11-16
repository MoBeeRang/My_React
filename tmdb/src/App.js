/*
//이번시간에 필요한 라이브러리들
npm install redux react-redux
npm install @reduxjs/toolkit
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material 
npm install axios
*/
// import MovieList from './components/NonRedux/MovieList'
import MovieList from './components/UseRedux/MovieList'
import MUI1 from './mui/MUI1'
import MUI2 from './mui/MUI2'
import MUI3 from './mui/MUI3'
function App() {
   return (
      <div>
         <MovieList></MovieList>
         <MUI1 />
         <MUI2 />
         <MUI3 />
      </div>
   )
}

export default App
