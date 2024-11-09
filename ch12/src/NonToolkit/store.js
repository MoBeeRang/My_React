import { createStore } from 'redux'
import conterReducer from './counterReducer'

const store = createStore(conterReducer)

export default store
