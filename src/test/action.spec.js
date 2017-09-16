import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import * as actions from '../actions/action'

describe('actions.js: ', () => {
  it('should create an action to fetch request', () => {
    const requestAction = {
      type: 'FETCH_REQUEST',
    }
    expect(actions.fetchRequest()).to.eql(requestAction)
  });
  it('should create an action for successful request', () => {
    const body = 'Fetch successful';
    const successAction = {
      type: 'FETCH_SUCCESS',
      body
    }
    expect(actions.fetchSuccess(body)).to.eql(successAction)
  });
  it('should create an action for failed request', () => {
    const err = 'Fetch failed';
    const failureAction = {
      type: 'FETCH_FAILURE',
      err
    }
    expect(actions.fetchFailure(err)).to.eql(failureAction)
  });
})
