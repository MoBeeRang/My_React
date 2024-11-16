import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import SearchResults from '../../pages/SearchResults'
import { searchMovie } from '../../api/tmdbApi'
//async 매개변수 받을때 {}로(비구조화 할당) 받는거 주의. createAsyncThunk는 1개는 그냥 ()로 중괄호 없이 받아도 되지만, 두개이상의 매개변수를 받을때는 반드시 json객체나 (혹은 배열)로 받아야 한다~
export const fetchSearchMovieResult = createAsyncThunk('movies/fetchSearchMovieResult', async ({ query, page }) => {
   const response = await searchMovie(query, page)
   return response.data.results
})
const moviesSlice = createSlice({
   name: 'movies',
   initialState: {
      loading: false,
      error: null,
      searchResults: [],
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchSearchMovieResult.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchSearchMovieResult.fulfilled, (state, action) => {
            state.loading = false
            //최초 search버튼 실행시 page 기본값 1로 들어감.
            if (action.meta.arg.page === 1) {
               state.searchResults = action.payload
            } else {
               //더 보기 눌렀을때 추가될 페이지 데이터로드시 기존+새로운 데이터 update 실행
               //push시도해보고 안되면 강사님이 알려주신대로 해보자.
               state.searchResults.push(action.payload)
               //state.searchResults = [...state.searchResults, ...action.payload]
            }
         })
         .addCase(fetchSearchMovieResult.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default moviesSlice.reducer
