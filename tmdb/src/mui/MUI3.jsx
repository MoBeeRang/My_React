import Grid from '@mui/material/Grid2'
import Container from '@mui/material/Container'

/*중단점은 다 있는가봉가, 플러그인마다 다른지는 모르겠듬. Default breakpoints

Each breakpoint (a key) matches with a fixed screen width (a value):

xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
These values can be customized. */

function MUI3() {
   return (
      <Container maxWidth="md">
         {/* 1spacing = 8px */}
         <Grid container spacing={2}>
            {/* <Grid size={8}>8사이즈입니다</Grid>
            <Grid size={4}>4사이즈입니다</Grid>
            <Grid size={8}>8사이즈입니다</Grid>
            <Grid size={4}>4사이즈입니다</Grid> */}
            <Grid size={{ xs: 6, md: 8 }}>
               <div style={{ backgroundColor: 'skyblue' }}> xs:6, md:8</div>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
               <div style={{ backgroundColor: 'skyblue' }}> xs:6, md:4</div>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
               <div style={{ backgroundColor: 'skyblue' }}> xs:6, md:4</div>
            </Grid>
            <Grid size={{ xs: 6, md: 8 }}>
               <div style={{ backgroundColor: 'skyblue' }}> xs:6, md:8</div>
            </Grid>
         </Grid>
      </Container>
   )
}

export default MUI3
