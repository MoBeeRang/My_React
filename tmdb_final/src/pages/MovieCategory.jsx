// 인기영화/ 현재 상영중인영화/ 개봉예정영화 를 한데 모아서 보여주는 곳
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
function MovieCategory() {
   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">MovieCategory페이지입니다.</Main>
         <Footer />
      </Wrap>
   )
}

export default MovieCategory
