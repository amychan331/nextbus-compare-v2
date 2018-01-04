import React  from 'react'
import { Field, reduxForm } from 'redux-form'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      { <input {...input} placeholder={label} type={type} /> }
      { touched && error ? <span> {error} </span> : '' }
    </div>
  </div>
)

const renderSelect = ({ input, label, children, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      { <select {...input}>{children}</select> }
      { touched && error ? <span> {error} </span> : '' }
    </div>
  </div>
)

const Form = props => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="agency"
        component={renderSelect}
        label="Agency"
      >
        <option value="">--None--</option>
        <option value="SF">Muni</option>
        <option value="BA">Bart</option>
        <option value="CT">Caltrain</option>
      </Field>
      <Field
        name="stopCode"
        type="text"
        component={renderField}
        label="Stop Code"
      />
      <button name="submit" type="submit" disabled={pristine || submitting}>
        Submit
      </button>
    </form>
  )
}

const validate = values => {
  const errors = {};

  const options = ["muni", "bart", "caltrain"];
  errors.agency = (!values.agency || options.indexOf(values.agency) === -1 ) ? "Please select a valid agency" : '';
  errors.stopCode = ( isNaN(Number(values.stopCode)) || values.stopCode.length < 3 || values.stopCode.length > 7 ) ? "Please enter a valid stop code" : '';

  return errors;
}

export default reduxForm({
  validate,
  form: 'ValidatedForm' // a unique identifier for this form
})(Form)


