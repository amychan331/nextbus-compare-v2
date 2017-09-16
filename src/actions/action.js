import fetch from 'isomorphic-fetch';

/* action types*/
export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

/* action creators*/
export function fetchRequest() {
  return {
    type: FETCH_REQUEST
  }
}

export function fetchSuccess(body) {
  return {
    type: FETCH_SUCCESS,
    body
  }
}

export function fetchFailure(err) {
  return {
    type: FETCH_FAILURE,
    err
  }
}

export function fetchJSON (agency, stopCode) {
  return dispatch => {
    dispatch(fetchRequest())
    return fetch(`https://api.511.org/transit/StopMonitoring?api_key=${process.env.REACT_APP_API_KEY}&agency=${agency}&stopCode=${stopCode}`)
    .then(res => res.json())
    .then(json => dispatch(fetchSuccess(json.body)))
    .catch(err=> dispatch(fetchFailure(err)))
  }
}

