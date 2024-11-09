import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&region=KR'

const AUTH_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTU3MmRhYjlkODc5OTNhNzIwM2YzMzFlZWUwMzYyYiIsIm5iZiI6MTczMTEzOTMzNS40Nzc3NjcyLCJzdWIiOiI2NzJmMGRjZjVhNjViYjgxOTBkZDBhOTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lJDt7ntFwNq-n4dh6osJJxmakWYo8Y2BH6_fjh7oWSI'

const tmdbApi = axios.create()
