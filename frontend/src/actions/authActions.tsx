import {authenticationRequest} from 'api/authApi';
import {asyncConstant} from '../constant/asyncConstant';
import {commonConstant} from '../constant/commonConstant';

export const loginRequestBegin = () => ({
        type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.BEGIN}`,
      });
export const loginRequestSuccess = () => ({
        type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.SUCCESS}`,
      });
export const loginRequestFailure = () => ({
        type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.FAILURE}`,
        payload: {},
      });

export const login = (email: string, password: string) => {
        return (dispatch: any) => {
                dispatch(loginRequestBegin());
                authenticationRequest(email, password)
                        .then((data: any) => {
                                if (data.auth) {
                                        dispatch(loginRequestSuccess());
                                } else {
                                        dispatch(loginRequestFailure());
                                }
                                return data;
                        })
                        .catch((error: any) => {
                                console.log(error);
                                dispatch(loginRequestFailure());
                                return error;
                        });
        };
};
