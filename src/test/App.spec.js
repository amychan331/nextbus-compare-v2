import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../components/App';

describe("<App /> component: ", function() {
  it('class App exists', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.is('.App')).to.equal(true);
  });
  it('header tag loaded', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header')).to.have.length(1);
  });
  it('main tag loaded', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find('main')).to.have.length(1);
  });
  it('<FormContainer /> loaded', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find('main').children('FormContainer')).to.have.length(1);
  });
  it('footer tag loaded', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find('footer')).to.have.length(1);
  });
});