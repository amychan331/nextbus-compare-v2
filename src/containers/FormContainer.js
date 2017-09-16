import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchRequest,
  fetchSuccess,
  fetchFailure
} from '../actions/action'
import Form from '../components/Form'

const FormContainer = ({ agency, stopCode, fetchRequest }) => (
  <Form
    agency={agency}
    stopCode={stopCode}
    onSubmit={() => fetchRequest(agency)} />
)

FormContainer.propTypes = {
  agency: PropTypes.string,
  stopCode: PropTypes.number,
  fetchRequest: PropTypes.func.isRequired
}


const mapStateToProps = (state) => ({
  agency: ,
  stopCode:
})

// Reducer usage
//  const mapStateToProps = (state) => ({
//   products: getCartProducts(state),
//   total: getTotal(state)
// })

export default connect(
  mapStateToProps,
  { fetchRequest }
)(FormContainer)