import fetch from 'isomorphic-fetch';

function fetchRequest() {
  return {
    type: FETCH_REQUEST
  }
}

function fetchSuccess(body) {
  return {
    type: FETCH_SUCCESS,
    body
  }
}

function fetchFailure(err) {
  return {
    type: FETCH_FAILURE,
    err
  }
}

export function fetchJSON (agency, stopCode) {
  return dispatch => {
    dispatch(fetchTodosRequest())
    return fetch(`https://api.511.org/transit/StopMonitoring?api_key=${process.env.REACT_APP_API_KEY}&agency=${agency}&stopCode=${stopCode}`)
    .then(res => res.json())
    .then(json => dispatch(fetchSuccess(json.body)))
    .catch(err=> dispatch(fetchFailure(err)))
  }
}
