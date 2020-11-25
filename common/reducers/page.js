import { SET_PAGE, SET_LOADING_PAGE, SET_PAGE_RESULTS_HTML } from '../actions'
const initialState = { loading: false, perPageResults: 30, pageResultsHtml: 1 }
const page = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.payload

    case SET_LOADING_PAGE:
      return {
        loading: action.payload,
        perPageResults: state.perPageResults,
        pageResultsHtml: state.pageResultsHtml
      }

    case SET_PAGE_RESULTS_HTML:
      return {
        loading: state.loading,
        perPageResults: state.perPageResults,
        pageResultsHtml: action.payload
      }

    default:
      return state
  }
}

export default page
