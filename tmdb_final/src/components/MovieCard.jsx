import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

function MovieCard({ movies }) {
   return (
      <Grid container spacing={2.5}>
         {movies.map((movie) => (
            //size는 12에서 5를 나눈 값. 얼마나 표현하고 싶은지 구하고 싶으면 12에 원하는 1행의 표현개수를 나눠 계산하면 된다지롱.
            <Grid key={movie.id} size={2.4}>
               {movie.title}
            </Grid>
         ))}
      </Grid>
   )
}

export default MovieCard
