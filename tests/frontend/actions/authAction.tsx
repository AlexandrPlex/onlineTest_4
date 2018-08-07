// import {initialState} from 'reducers/commonReducer';
import * as action from '../../../frontend/src/actions/authActions';
import {asyncConstant} from '../../../frontend/src/constant/asyncConstant';
import {commonConstant} from '../../../frontend/src/constant/commonConstant';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import fetchMock from 'fetch-mock';
import { initialState } from 'reducers/commonReducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('sync ducks', () => {
  it('setLoading()', () => {
    const state = {initialState};
    const store = mockStore(() => state);
    store.dispatch(action.login('ds', 'ds'));
    const actions = store.getActions().map(({ type, payload }) => ({ type, payload }));
    console.log(actions);
    // ...остальной код отсюда - далее по тексту
  });
});
