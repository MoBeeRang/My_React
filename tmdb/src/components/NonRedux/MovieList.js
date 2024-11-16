//Tip::api 쓸땐 useEffect가 무조건 쓰인다.
import { useState, useEffect } from 'react'
import { getMovies } from '../../api/tmdbApi' //tmdbApi에서 tmdbApi만 기본 export해줬지만, getMovies도 export해줬기때문에 불러올 수 있다.
function MovieList() {
   const [movies, setMovies] = useState([]) //영화 데이터
   const [loding, setLoding] = useState(true) //로딩상태
   const [error, setError] = useState(null) //api call할때 문제가 발생한다면 발생하는 에러메세지

   //화면이 로딩될때 최초 한번만 실행하기위해 useEffect를 사용
   useEffect(() => {
      const fetchMovies = async () => {
         try {
            setLoding(true)
            const movieList = await getMovies()
            console.log(movieList)
            setMovies(movieList.data.results)
         } catch (error) {
            setError(error.message)
         } finally {
            setLoding(false)
         }
      }
      fetchMovies()
   }, [])
   if (loding) return <p>loading...</p>
   if (error) return <p>Error: {error}</p>
   return (
      <div>
         <h1>인기영화 목록</h1>
         <ul>
            {movies.map((movie) => (
               <li key={movie.id}>{movie.title}</li>
            ))}
         </ul>
      </div>
   )
}

export default MovieList
