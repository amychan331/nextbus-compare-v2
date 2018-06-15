import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Form from '../containers/Form'

import configureStore from 'redux-mock-store'
const mockStore = configureStore()

describe("<Form /> component:", function() {
  it('form tag exists', function() {
    const wrapper = shallow(<Form store={ mockStore({items: {}}) }/>)
    expect(wrapper.dive().is('form')).to.equal(true)
  })
})