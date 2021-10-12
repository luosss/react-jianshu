import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'
export const searchFoucus = () => ({
  type: constants.SEARCH_FOCUS
})
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})
export const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then(res => {
        const datas = res.data.data;
        const action = changeList(datas);
        dispatch(action)

      })
      .catch(err => {
        console.log(err);
      })
  }
}