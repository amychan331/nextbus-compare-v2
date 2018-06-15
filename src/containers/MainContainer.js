import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Form from './Form'
import Display from './Display'

const MainContainer = ({loading, error, items}) => {
  return (
    <div id="container">
      <Form />
      { loading ? <div>Loading...</div> : null }
      { error ? <div>{ error }</div>: null }
      { Object.keys(items).length ? <Display items={items} /> : "empty" }
    </div>
  )
}

MainContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  items: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    items: state.items,
  }
}

export default connect(mapStateToProps)(MainContainer)
