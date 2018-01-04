import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import * as actions from '../actions/action'

// for async testing
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions.js regular testing: ', () => {
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

describe('actions.js async action testing', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_SUCCESS when fetching has been done', () => {
    nock('https://api.511.org')
    .get('/transit/StopMonitoring')
    .query({
      api_key: process.env.REACT_APP_API_KEY,
      agency: 'SF',
      stopCode: 14506
    })
    .reply(200, 'path working')

    const expectedActions = [
      {type: actions.FETCH_REQUEST},
      {type: actions.FETCH_SUCCESS, body: {}}
    ]

    const store = mockStore({})
    console.log(store.getActions())

    // return store.dispatch(actions.fetchJSON("sf-muni", 14506)).then(() => {
    //   expect(store.getActions()).to.eql(expectedActions)
    // })
  })
})
