import React from 'react'
import './MainContainer.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Form from './Form'
import Display from './Display'

const MainContainer = ({loading, error, items, alert}) => {
  return (
    <div id="container">
      <Form />
      { loading ?
        <div className="loading">
          <p className="loadingAlert screenreader" role="alert">Loading......</p>
        </div> : null }
      { error ? <p className="err errbox" role="alert">{ error }</p> : null }
      { alert ? <p className="alert screenreader" role="alert">{ alert }</p> : null }
      { Object.keys(items).length ?
        <Display items={items} /> :
        <p><em>Please input a transportation agency and station stop code.</em></p>
      }
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
    alert: state.alert,
  }
}

export default connect(mapStateToProps)(MainContainer)
