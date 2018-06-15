import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import MainContainer from '../containers/MainContainer'

import configureStore from 'redux-mock-store'
const mockStore = configureStore()

describe("<MainContainer /> component:", function() {
  it('id container exists', function() {
    const wrapper = shallow(<MainContainer store={ mockStore({loading: false, error: null, items: {}}) }/>)
    expect(wrapper.dive().is('#container')).to.equal(true)
  })
})