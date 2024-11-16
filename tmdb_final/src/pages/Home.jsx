// 메인페이지
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
function Home() {
   return (
      <Wrap>
         <Menu />
         <Main>Main페이지입니다.</Main>
         <Footer />
      </Wrap>
   )
}

export default Home
