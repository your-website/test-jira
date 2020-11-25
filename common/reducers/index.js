import { combineReducers } from 'redux'
import repositories from './repositories'
import page from './page'

const rootReducer = combineReducers({
  repositories,
  page
})

export default rootReducer
