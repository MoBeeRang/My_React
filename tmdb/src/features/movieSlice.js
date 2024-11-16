import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies } from '../api/tmdbApi'
//api를 쉽게 호출하게 도와주는 함수, 비동기 thunk 액션 이라고도 함: api를 호출하는 역할을 하고, 호출된 결과를 etraReducers에게 전달하는 역할을 한다.
//첫번째 매개변수는 createAsyncThunk의 이름을 짓는다, 두번째는 async로 통신정보를 입력한다.
//보통은 Slice의 name이용해 이름짓는다. '슬라이스이름/api요청객체(비동기함수)명'
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await getMovies()
   return response.data.results //extraReducer에게 결과를 전달해준다. 떵크가전달해준다.
})
const moviesSlice = createSlice({
   name: 'movies',
   initialState: {
      loding: false,
      movies: [],
      error: null,
   },
   reducers: {},
   //비동기 통신에선 extraRe...를 사용한다.
   extraReducers: (builder) => {
      builder
         //데이터를 가져오는 동안
         .addCase(fetchMovies.pending, (state) => {
            state.loding = true
         })
         //데이터 가져오기 성공
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loding = false
            //통신으로 받은 respons 결과data는 action.payload값으로 받아오게 된다.
            state.movies = action.payload //response.data.results
         })
         //데이터 가져오기 실패
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loding = false
            state.error = action.error.message //에러메세지 가져오는 곳
         })
   },
})
export default moviesSlice.reducer
