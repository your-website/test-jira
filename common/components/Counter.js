import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import PropTypes from 'prop-types'
import apiClient from '../api/apiClient'

const Counter = props => {
  async function test() {
    const { data } = await apiClient.getRepositories(1, 30, null)
  }
  return (
    <div>
      <button onClick={test}>click</button>
    </div>
  )
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  page: state.page
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
