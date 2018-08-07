// import {initialState} from 'reducers/commonReducer';
import * as actions from '../../../frontend/src/actions/authActions';
import {asyncConstant} from '../../../frontend/src/constant/asyncConstant';
import {commonConstant} from '../../../frontend/src/constant/commonConstant';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import fetchMock from 'fetch-mock';
import { initialState } from 'reducers/commonReducer';
​
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
​
describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
​
  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    fetchMock
      // tslint:disable-next-line:semicolon
      .getOnce('/auth', { body: { auth: false }});
​
​
    const expectedActions = [
      { type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.BEGIN}` },
      { type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.FAILURE}`},
    ];
    const store = mockStore({ commomReducer: initialState });
​   console.log(typeof actions.login('a', 'f'));
    return store.dispatch(actions.login('', '').then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    }));
  });
});
