import axios from 'axios'

// const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&region=KR'
const BASE_URL = 'https://api.themoviedb.org/3'

// const AUTH_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTU3MmRhYjlkODc5OTNhNzIwM2YzMzFlZWUwMzYyYiIsIm5iZiI6MTczMTEzOTMzNS40Nzc3NjcyLCJzdWIiOiI2NzJmMGRjZjVhNjViYjgxOTBkZDBhOTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lJDt7ntFwNq-n4dh6osJJxmakWYo8Y2BH6_fjh7oWSI'
const AUTH_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTU3MmRhYjlkODc5OTNhNzIwM2YzMzFlZWUwMzYyYiIsIm5iZiI6MTczMTEzOTMzNS40Nzc3NjcyLCJzdWIiOiI2NzJmMGRjZjVhNjViYjgxOTBkZDBhOTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lJDt7ntFwNq-n4dh6osJJxmakWYo8Y2BH6_fjh7oWSI'

//axios api 사용방법~!
const tmdbApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json', //response데이터를 json객체로 달라고 요청
      Authorization: `Bearer ${AUTH_KEY}`, //서버에게 인정받은 사람에게만 response해주기때문에 키값을 보내줘야 한다.
   },
})

//axios api 사용방법~!(get방식) (async await (비동기함수)를 사용해야한다.)
//API를 통해 영화 목록을 가져오는 함수
//매개변수 name=값 은 default값이다.
export const getMovies = async (page = 1) => {
   //   /movie/popular?language=ko-KR&page=1&region=KR
   const response = await tmdbApi.get('/movie/popular', {
      params: {
         language: 'ko-KR',
         page,
         region: 'KR',
      },
   })
   //await 걸어주면 끝나고 response에 담아주므로 주의해서 사용하도록 하자. (async await함수를 한번 더 보도록 하자.)
   return response
}
export default tmdbApi
