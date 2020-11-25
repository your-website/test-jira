import { SET_PAGE, SET_LOADING_PAGE, SET_PAGE_RESULTS_HTML, SET_POPUP } from '../actions'
const initialState = { loading: false, perPageResults: 30, pageResultsHtml: 1, openPopUp: null }
const page = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.payload

    case SET_LOADING_PAGE:
      return {
        loading: action.payload,
        perPageResults: state.perPageResults,
        pageResultsHtml: state.pageResultsHtml,
        openPopUp: state.openPopUp
      }

    case SET_PAGE_RESULTS_HTML:
      return {
        loading: state.loading,
        perPageResults: state.perPageResults,
        pageResultsHtml: action.payload,
        openPopUp: state.openPopUp
      }

    case SET_POPUP:
      return {
        loading: state.loading,
        perPageResults: state.perPageResults,
        pageResultsHtml: state.pageResultsHtml,
        openPopUp: action.payload
      }

    default:
      return state
  }
}

export default page
