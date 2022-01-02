import { createStore } from "redux"
import reducers from './reducers/index'

const store = createStore(reducers, {})  //the empty object is a default state

export default store