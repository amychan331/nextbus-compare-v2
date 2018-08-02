const initialState = {
  loading: false,
  error: null,
  items: {}
}

export function reducers (state = initialState, action) {
  switch (action.type) {
    case 'INVALID_INPUT':
      console.log("reducer: INVALID_INPUT")
      return {
        ...state,
        loading: false,
        error: "Invalid input: " + action.error +"."
      }

    case 'REQUEST_DATA':
      return {
        ...state,
        loading: true,
        error: null
      }

    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: "Problem connecting with database. Please contact admin."
      }

    case 'FETCH_REFUSE':
      return {
        ...state,
        loading: false,
        error: "Over 3 entries inputted."
      }

    case 'FETCH_SUCCESS':
      let stopData = action.body.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit
      if (stopData.length <= 0) {
        return {
          ...state,
          loading: false,
          error: "Input station does not exist or vehicle line not in operation."
        };
      }

      let stopCode = stopData[0].MonitoringRef
      if (state.items.hasOwnProperty(stopCode)) {
        return {
          ...state,
          loading: false,
          error: "Duplicate entry."
        };
      }

      return {
        ...state,
        loading: false,
        items: {...state.items, [stopCode]: stopData}
      }

    case 'REMOVE_ITEM':
      const oldItems = state.items
      const newItems = Object.keys(oldItems)
        .filter(key => key !== action.body.stopCode)
        .reduce((res, cur) => {
          res[cur] = oldItems[cur]
          return res
        }, {})

      return {
        ...state,
        loading: false,
        items: newItems
      }

    default:
      return state;
  }
}

export default reducers