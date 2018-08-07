import {authenticationRequest} from 'api/authApi';
import { AxiosPromise } from '../../../node_modules/axios';
import { Dispatch } from '../../../node_modules/redux';
import {asyncConstant} from '../constant/asyncConstant';
import {commonConstant} from '../constant/commonConstant';

interface IActionReturnState {
        type: any;
        payload?: any;
      }

export const loginRequestBegin = (): IActionReturnState => ({
        type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.BEGIN}`,
      });
export const loginRequestSuccess = (): IActionReturnState => ({
        type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.SUCCESS}`,
      });
export const loginRequestFailure = (): IActionReturnState => ({
        type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.FAILURE}`,
        payload: {},
      });

export const login = (email: string, password: string): any => {
        return new Promise( (resolve: any, reject: any) => {
                return (dispatch: Dispatch<any>): Promise<AxiosPromise> => {
                dispatch(loginRequestBegin());
                return authenticationRequest(email, password)
                        .then((data: any) => {
                                if (data.auth) {
                                        dispatch(loginRequestSuccess());
                                } else {
                                        dispatch(loginRequestFailure());
                                }
                                return resolve(data);
                        })
                        .catch((error: any) => {
                                console.log(error);
                                dispatch(loginRequestFailure());
                                return reject(error);
                        });
                };
        });
};

// return (dispatch: Dispatch<any>): Promise<AxiosPromise> => {
//         dispatch(loginRequestBegin());
//         return authenticationRequest(email, password)
//                 .then((data: any) => {
//                         if (data.auth) {
//                                 dispatch(loginRequestSuccess());
//                         } else {
//                                 dispatch(loginRequestFailure());
//                         }
//                         return data;
//                 })
//                 .catch((error: any) => {
//                         console.log(error);
//                         dispatch(loginRequestFailure());
//                         return error;
//                 });
// };
