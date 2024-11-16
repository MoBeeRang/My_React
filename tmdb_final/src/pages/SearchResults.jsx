// 영화 검색 결과
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
function SearchResults() {
   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">SearchResults페이지입니다.</Main>
         <Footer />
      </Wrap>
   )
}

export default SearchResults
