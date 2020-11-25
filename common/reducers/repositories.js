import {
  SET_REPOSITORIES,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../actions'

const repositories = (state = 0, action) => {
  switch (action.type) {
    case SET_REPOSITORIES:
      return action.payload
    case INCREMENT_COUNTER:
      return state + 1
    case DECREMENT_COUNTER:
      return state - 1
    default:
      return state
  }
}

export default repositories
