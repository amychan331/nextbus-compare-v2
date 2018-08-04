import React, { Component } from 'react'
import './Form.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchJSON, fetchRefuse, invalidInput } from '../actions/index'

class Form extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateInput = this.validateInput.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    if (Object.keys(this.props.items).length >= 3) {
      this.props.fetchRefuse()
    } else {
      if ( this.validateInput(e.target.agency.value, e.target.stopCode.value) ) {
        this.props.fetchJSON(e.target.agency.value, e.target.stopCode.value)
      }
    }
  }

  validateInput(agency, stopCode) {
    if (agency.length <= 0) {
      this.props.invalidInput("Selection of agency is required")
      return false
    }
    else if (stopCode.length <= 0 || stopCode.length > 7) {
      this.props.invalidInput("Input should have 1 - 6 digits")
      return false
    }
    else if (isNaN(stopCode)) {
      this.props.invalidInput("Input is not a number")
      return false
    }
    return true
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="agency">Agency: </label>
        <select name="agency" id="agency" required>
          <option value="">--None--</option>
          <option value="SF">Muni</option>
          <option value="BA">Bart</option>
          <option value="CT">Caltrain</option>
        </select>
        <label htmlFor="stopCode">Stop Code:</label>
        <input type="text" name="stopCode" id="stopCode" required/>
        <input type="submit" name="submit" value="Submit" />
      </form>
    )
  }
}

Form.propTypes = {
  items: PropTypes.object,
  handleSubmit: PropTypes.func,
  fetchJSON: PropTypes.func,
  fetchRefuse: PropTypes.func
}

const mapStateToProps = state => {
  return { items: state.items }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchJSON: (agency, stopCode) => {
      dispatch(fetchJSON({agency, stopCode}))
    },
    fetchRefuse: () => dispatch(fetchRefuse()),
    invalidInput: (error) => dispatch(invalidInput(error))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)