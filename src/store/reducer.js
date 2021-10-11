import { combineReducers } from 'redux'
import { reducer as headerReducer } from '../component/Header/store'

const reducer = combineReducers({
  header: headerReducer
})

export default reducer

