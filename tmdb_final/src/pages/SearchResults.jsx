import { useEffect, useState } from 'react'
//useSearchParams:: 쿼리스트링 내용을 가져올 수 있다.
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchMovieResult } from '../features/movies/moviesSlice'
// 영화 검색 결과
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

import MovieCard from '../components/MovieCard'

function SearchResults() {
   const [searchParams] = useSearchParams()
   const query = searchParams.get('query')

   const [page, setPate] = useState(1) //더보기 눌렀을때 필요한 state값.

   const dispatch = useDispatch(fetchSearchMovieResult())
   const { searchResults, loading, error } = useSelector((state) => state.movies)
   useEffect(() => {
      //createAsyncThunk는 무조건 두개이상 매개변수는 객체나 배열로 줘야된다. 받을때도 같은 구조로 받을것(fetchSearchMovieResult설정과 동일하게 맞춰야 한다는 말이다).
      dispatch(fetchSearchMovieResult({ query, page: 1 }))
   }, [dispatch])
   if (loading && page === 1) {
      return (
         <Wrap>
            <Menu />
            <Main $padding="30px 0">
               <h2>검색중...</h2>
            </Main>
            <Footer />
         </Wrap>
      )
   }
   if (error) {
      return (
         <Wrap>
            <Menu />
            <Main $padding="30px 0">
               <h2>오류발생:{error}</h2>
            </Main>
            <Footer />
         </Wrap>
      )
   }
   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            <MovieCard movies={searchResults} />
         </Main>

         <Footer />
      </Wrap>
   )
}

export default SearchResults
