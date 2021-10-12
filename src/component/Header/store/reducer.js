import * as constants from './constants'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false,
  list: []
});



/* const reducer = (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    // return {
    //   focused: true
    // }

    return state.set('focused', true); //immutable对象set方法，会返回一个新的对象
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  if (action.type === constants.CHANGE_LIST) {
   console.log(action);
   return state.set('list', action.data)
    
  }
  return state;
} */


//优化
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.CHANGE_LIST:
      return state.set('list', action.data)
    default:
      return state;
  }
}
export default reducer