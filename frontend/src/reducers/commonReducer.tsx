import {asyncConstant} from 'constant/asyncConstant';
import {commonConstant} from 'constant/commonConstant';
import {Action} from 'redux';
import {ICommonState} from 'types';

export interface IActionType extends Action {
  type: string;
  payload: any;
}

export const initialState = {
  get state(): ICommonState {
    return {
        authState: false,
        loading: false,
        connectServerError: false,
        getServerDataError: false,
    };
  },
};

export default function commonReducer(state: ICommonState = initialState.state, action: IActionType) {
  switch (action.type) {
    case `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.BEGIN}`:
      return {
        ...state,
        loading: true,
        connectServerError: false,
        getServerDataError: false,
      };
    case `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.SUCCESS}`:
      return {
        ...state,
        loading: false,
        authState: true,
      };
    case `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.FAILURE}`:
      return {
        ...state,
        loading: false,
        connectServerError: action.payload.connectServerError || false,
        getServerDataError: action.payload.getServerDataError || false,
      };
  }
  return state;
}
