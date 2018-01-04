import React, {Component} from 'react'
import Form from './Form'
import { connect } from 'react-redux'
import { fetchJSON } from '../actions/index'

class Timetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  onSubmit = (values) => {
    // this.setState({values: values});
    // console.log(this.props.fetchRequest(values.agency, values.stopCode));
    this.props.fetchJSON(values.agency, values.stopCode);
  }

  render() {
    return (
      <div>
      <Form onSubmit={this.onSubmit} />
      { this.state.values ? "text" : "empty" }
      </div>
    );
  }
}

export default connect(null, { fetchRequest })(Timetable)