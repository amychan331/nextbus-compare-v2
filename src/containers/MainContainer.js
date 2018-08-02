import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Form from './Form'
import Display from './Display'

const MainContainer = ({loading, error, items}) => {
  return (
    <div id="container">
      <Form />
      { loading ? <p className="msg">Loading...</p> : null }
      { error ? <p className="err">{ error }</p> :
        Object.keys(items).length ? <Display items={items} /> : <p><em>Please input a transportation agency and station stop code.</em></p> }
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
