import React from 'react'
import PropTypes from 'prop-types'
import './Form.css'

const Form = ({ agency, stopCode, fetchRequest }) => (
  const filledForm = agency.length > 0 && stopCode.length > 0
  const err_agency = agency.length === 0;
  const err_stopCode = stopCode.length === 0;

  return (
    <form>
      <label htmlFor="agency" aria-describedby="err_agency" aria-required="true">Select transit agency: </label>
      <select name="agency" value={agency} autoFocus>
        <option value="">--None--</option>
        <option value="sf-muni">Muni</option>
        <option value="bart">BART</option>
        <option value="caltrain">Caltrain</option>
      </select>
      {err_agency ? '' : '<span id="err_agency" className="error" role="alert">Please select an agency</span>'}

      <label htmlFor="stopCode" aria-describedby="err_stopCode" aria-required="true">Enter station code: </label>
      <input name="stopCode" type="text" placeholder="Stop code" maxLength="6" value={stopCode}/>
      {err_stopCode ? '' : '<span id="err_stopCode" className="error" role="alert">Please enter a station code</span>'}

      <input name="submit" type="submit" value="Submit" disabled={filledForm ? '' : 'disabled'}/>
    </form>
  )
);

Form.propTypes = {
  agency: PropTypes.string,
  stopCode: PropTypes.number,
  fetchRequest: PropTypes.func.isRequired
}

export default Form
