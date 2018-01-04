import fetch from 'isomorphic-fetch';

/* action types*/
export const REQUEST_DATA = 'REQUEST_DATA'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

/* action creators*/
export function requestData (body) {
  return {
    type: REQUEST_DATA,
    body
  }
}

export function fetchSuccess (body, json) {
  console.log("fetchSuccess BODY:" + body );
  console.log("fetchSuccess JSON:" + json );
  return {
    type: FETCH_SUCCESS,
    body
  }
}

export const fetchFailure = (err) => ({
  type: FETCH_FAILURE,
  err
});

export function fetchJSON (agency, stopCode) {
  return dispatch => {
    dispatch(requestData(body))
    return
      fetch(`https://api.511.org/transit/StopMonitoring?api_key=${process.env.REACT_APP_API_KEY}&agency=${agency}&stopCode=${stopCode}`)
      .then(
        res => res.json(),
        err => dispatch(fetchFailure(err))
      )
      .then(json => dispatch(fetchSuccess(body, json.body)))
  }
}

