import fetch from 'isomorphic-fetch'

/* action types*/
export const REQUEST_DATA = 'REQUEST_DATA'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'
export const FETCH_REFUSE = 'FETCH_REFUSE'
export const REMOVE_ITEM = 'REMOVE_ITEM'

/* action creators*/
export function requestData () {
  return {
    type: REQUEST_DATA,
  }
}

export function fetchSuccess (body) {
  return {
    type: FETCH_SUCCESS,
    body
  }
}

export function fetchFailure (error) {
  return {
    type: FETCH_FAILURE,
    error
  }
}

export function fetchRefuse () {
  return {
    type: FETCH_REFUSE,
  }
}

export function removeItem (body) {
  return {
    type: REMOVE_ITEM,
    body
  }
}


export const fetchJSON = body => dispatch => {
  dispatch(requestData(body))
  return fetch(`https://api.511.org/transit/StopMonitoring?api_key=${process.env.REACT_APP_API_KEY}&agency=${body.agency}&stopCode=${body.stopCode}`)
  .then(res => res.json())
  .then(json => dispatch(fetchSuccess(json)))
  .catch(err => dispatch(fetchFailure(err)))
}
