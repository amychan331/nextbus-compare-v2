import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Form from '../components/Form';

describe("<Form /> component: ", function() {
  it('class Form exists', function() {
    const wrapper = shallow(<Form />);
    expect(wrapper.is('form')).to.equal(true);
  });
});