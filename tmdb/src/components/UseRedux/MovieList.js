//Tip::api 쓸땐 useEffect가 무조건 쓰인다.
import { useEffect } from 'react'
//import { getMovies } from '../../api/tmdbApi' //tmdbApi에서 tmdbApi만 기본 export해줬지만, getMovies도 export해줬기때문에 불러올 수 있다.

import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../features/movieSlice'
function MovieList() {
   const dispatch = useDispatch()
   //비구조화 할당
   const { movies, loding, error } = useSelector((state) => {
      // console.log(state.movies.movies)
      /* state.movies = {
            loding: false,
            movies: [{...},{...},...],
            error: null,
      } */
      return state.movies //movies 는 슬라이스 구분자값
   })
   useEffect(() => {
      dispatch(fetchMovies())
   }, [dispatch])
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
