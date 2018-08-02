import React, { Component } from 'react'
import './Display.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeItem } from '../actions/index'

class Display extends Component {
  constructor(props) {
    super(props)
    this.timeLine = this.timeLine.bind(this)
  }

  timeLine() {
    const current = (new Date()).getTime()
    const timetable = Object.keys(this.props.items).map(stopCode => (
      <ul key={stopCode}>
        <h3 className="station">Station Code {stopCode}: {this.props.items[stopCode][0].MonitoredVehicleJourney.MonitoredCall.StopPointName} </h3>
        {this.props.items[stopCode].map(
          (vehicle, id) => (
            <li key={id}>
              <p className="vehicle">
              {vehicle.MonitoredVehicleJourney.LineRef}-{vehicle.MonitoredVehicleJourney.PublishedLineName}
              </p>
              <p className="minutes">
              {
                // aimed arrival time and current is converted to numeric values with getTime()
                // then differences is then divide by 6000 to get the minute
                // then Math.round converts the result to whole numbers
                Math.round(
                  ((new Date(vehicle.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime).getTime())
                    - current
                  ) / 6000
                )
              } min
              </p>
            </li>
          )
        )}
        <button onClick={ (e) => this.props.removeItem({stopCode}) }>Remove Entry</button>
      </ul>
    ))
    return timetable
  }

  render() {
    return (
      <section className="timetable">
        { this.timeLine() }
      </section>
    )
  }
}

Display.propTypes = {
  stopCode: PropTypes.number,
  items: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    removeItem: (stopCode) => {
      dispatch(removeItem(stopCode))
    }
  }
}

export default connect(null, mapDispatchToProps)(Display)