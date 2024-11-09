//Provider는 툴킷을 사용할때도 react-redux를 사용한다. import를 어디걸 사용하는지 잘 봐둬야 함.
import { Provider } from 'react-redux'
// import Counter from './NonToolkit/Counter'
// import store from './NonToolkit/store'
import Counter from './UseToolkit/Counter'
import store from './UseToolkit/store'
import User from './UseToolkit/User'

function App() {
   // return (
   //    <Provider store={store}>
   //       <Counter />
   //    </Provider>
   // )
   return (
      <Provider store={store}>
         <Counter />
         <User />
      </Provider>
   )
}

export default App
