import {
  SET_REPOSITORIES,
} from '../actions'

const repositories = (state = 0, action) => {
  switch (action.type) {
    case SET_REPOSITORIES:
      return action.payload
    default:
      return state
  }
}

export default repositories
