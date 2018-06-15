import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchJSON, fetchRefuse } from '../actions/index'

class Form extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    if (Object.keys(this.props.items).length >= 3) {
      this.props.fetchRefuse()
    } else {
      this.props.fetchJSON(e.target.agency.value, e.target.stopCode.value)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="agency">Agency: </label>
        <select name="agency" id="agency">
          <option value="">--None--</option>
          <option value="SF">Muni</option>
          <option value="BA">Bart</option>
          <option value="CT">Caltrain</option>
        </select>
        <label htmlFor="stopCode">Stop Code:</label>
        <input type="text" name="stopCode" id="stopCode" />
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
    fetchRefuse: () => dispatch(fetchRefuse())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

// const renderField = ({ input, label, type, meta: { touched, error } }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       { <input {...input} placeholder={label} type={type} /> }
//       { touched && error ? <span> {error} </span> : '' }
//     </div>
//   </div>
// )

// const renderSelect = ({ input, label, children, meta: { touched, error } }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       { <select {...input}>{children}</select> }
//       { touched && error ? <span> {error} </span> : '' }
//     </div>
//   </div>
// )

// const validate = values => {
//   const errors = {};
//   const options = ["SF", "BA", "CT"];
//   errors.agency = (!values.agency || options.indexOf(values.agency) === -1 ) ? "Please select a valid agency" : '';
//   errors.stopCode = ( isNaN(Number(values.stopCode)) || values.stopCode.length < 1 || values.stopCode.length > 7 ) ? "Please enter a valid stop code" : '';

//   return errors;
// }