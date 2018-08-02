import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Display from '../containers/Display'

import fakeAPI from './fakeAPI'
import configureStore from 'redux-mock-store'
const mockStore = configureStore()
import sinon from 'sinon'

describe("<Display /> component:", function() {
  it('display section exists', function() {
    const dispatch = sinon.spy()
    const fakeItem = {"17397": fakeAPI.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit}
    const wrapper = shallow(<Display
      dispatch={dispatch}
      store={mockStore({})}
      items={fakeItem} />)
    expect(wrapper.dive().is('section.timetable')).to.equal(true)
  })
})