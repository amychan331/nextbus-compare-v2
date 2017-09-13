import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Timetable from '../components/Timetable';

describe("<Timetable /> component: ", function() {
  it('class Timeable exists', function() {
    const wrapper = shallow(<Timetable />);
    expect(wrapper.is('#timetable')).to.equal(true);
  });
});