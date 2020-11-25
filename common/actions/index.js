export const SET_REPOSITORIES = 'SET_REPOSITORIES'
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const SET_PAGE = 'SET_PAGE'
export const SET_LOADING_PAGE = 'SET_LOADING_PAGE'
export const SET_PAGE_RESULTS_HTML = 'SET_PAGE_RESULTS_HTML'

export const setRepo = value => ({
  type: SET_REPOSITORIES,
  payload: value
})

export const setPage = (value) => ({
  type: SET_PAGE,
  payload: value
})

export const setLoadingPage = (value) => ({
  type: SET_LOADING_PAGE,
  payload: value
})

export const setPageResultsHtml = (value) => ({
  type: SET_PAGE_RESULTS_HTML,
  payload: value
})

export const increment = () => ({
  type: INCREMENT_COUNTER
})

export const decrement = () => ({
  type: DECREMENT_COUNTER
})

export const incrementIfOdd = () => (dispatch, getState) => {
  const { counter } = getState()

  if (counter % 2 === 0) {
    return
  }

  dispatch(increment())
}

export const incrementAsync = (delay = 1000) => dispatch => {
  setTimeout(() => {
    dispatch(increment())
  }, delay)
}
