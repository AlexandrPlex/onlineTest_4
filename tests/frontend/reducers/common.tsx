import {asyncConstant} from 'constant/asyncConstant';
import {commonConstant} from 'constant/commonConstant';
import commonReducer, {initialState} from 'reducers/commonReducer';
import {ICommonState} from 'types';

describe('[Reducer] common tests', () => {
    const state: ICommonState = initialState.state;
    describe('On [clear] start', () => {
        const discribeState = {...state};
        it('get auth begin', () => {
            const localState = {
                ...discribeState,
            };
            const action = {
                type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.BEGIN}`,
                payload: null,
            };
            expect(commonReducer(localState, action)).toEqual({
                    authState: false,
                    loading: true,
                    connectServerError: false,
                    getServerDataError: false,
                });
        });
        it('get auth success', () => {
            const localState = {
                ...discribeState,
                loading: true,
            };
            const action = {
                type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.SUCCESS}`,
                payload: null,
            };
            expect(commonReducer(localState, action)).toEqual({
                    authState: true,
                    loading: false,
                    connectServerError: false,
                    getServerDataError: false,
                });
        });
        it('get auth failure[connectServerError]', () => {
            const localState = {
                ...discribeState,
                loading: true,
            };
            const action = {
                type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.FAILURE}`,
                payload: {
                    connectServerError: true,
                    getServerDataError: false,
                },
            };
            expect(commonReducer(localState, action)).toEqual({
                    authState: false,
                    loading: false,
                    connectServerError: true,
                    getServerDataError: false,
                });
        });
        it('get auth failure[getServerDataError]', () => {
            const localState = {
                ...discribeState,
                loading: true,
            };
            const action = {
                type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.FAILURE}`,
                payload: {
                    connectServerError: false,
                    getServerDataError: true,
                },
            };
            expect(commonReducer(localState, action)).toEqual({
                    authState: false,
                    loading: false,
                    connectServerError: false,
                    getServerDataError: true,
                });
        });
    });
    describe('On [connectServerError] start', () => {
        const discribeState = {
            ...state,
            connectServerError: true,
        };
        it('get auth begin', () => {
            const localState = {
                ...discribeState,
            };
            const action = {
                type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.BEGIN}`,
                payload: null,
            };
            expect(commonReducer(localState, action)).toEqual({
                    authState: false,
                    loading: true,
                    connectServerError: false,
                    getServerDataError: false,
                });
        });
        it('get auth success', () => {
            const localState = {
                ...discribeState,
                loading: true,
                connectServerError: false,
            };
            const action = {
                type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.SUCCESS}`,
                payload: null,
            };
            expect(commonReducer(localState, action)).toEqual({
                    authState: true,
                    loading: false,
                    connectServerError: false,
                    getServerDataError: false,
                });
        });
        it('get auth failure[connectServerError]', () => {
            const localState = {
                ...discribeState,
                loading: true,
                connectServerError: false,
            };
            const action = {
                type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.FAILURE}`,
                payload: {
                    connectServerError: true,
                    getServerDataError: false,
                },
            };
            expect(commonReducer(localState, action)).toEqual({
                    authState: false,
                    loading: false,
                    connectServerError: true,
                    getServerDataError: false,
                });
        });
        it('get auth failure[getServerDataError]', () => {
            const localState = {
                ...discribeState,
                loading: true,
                connectServerError: false,
            };
            const action = {
                type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.FAILURE}`,
                payload: {
                    connectServerError: false,
                    getServerDataError: true,
                },
            };
            expect(commonReducer(localState, action)).toEqual({
                    authState: false,
                    loading: false,
                    connectServerError: false,
                    getServerDataError: true,
                });
        });
    });
    describe('On [getServerDataError] start', () => {
        const discribeState = {
            ...state,
            getServerDataError: true,
        };
        it('get auth begin', () => {
            const localState = {
                ...discribeState,
            };
            const action = {
                type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.BEGIN}`,
                payload: null,
            };
            expect(commonReducer(localState, action)).toEqual({
                    authState: false,
                    loading: true,
                    connectServerError: false,
                    getServerDataError: false,
                });
        });
        it('get auth success', () => {
            const localState = {
                ...discribeState,
                loading: true,
                getServerDataError: false,
            };
            const action = {
                type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.SUCCESS}`,
                payload: null,
            };
            expect(commonReducer(localState, action)).toEqual({
                    authState: true,
                    loading: false,
                    connectServerError: false,
                    getServerDataError: false,
                });
        });
        it('get auth failure[connectServerError]', () => {
            const localState = {
                ...discribeState,
                loading: true,
                getServerDataError: false,
            };
            const action = {
                type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.FAILURE}`,
                payload: {
                    connectServerError: true,
                    getServerDataError: false,
                },
            };
            expect(commonReducer(localState, action)).toEqual({
                    authState: false,
                    loading: false,
                    connectServerError: true,
                    getServerDataError: false,
                });
        });
        it('get auth failure[getServerDataError]', () => {
            const localState = {
                ...discribeState,
                loading: true,
                getServerDataError: false,
            };
            const action = {
                type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.FAILURE}`,
                payload: {
                    connectServerError: false,
                    getServerDataError: true,
                },
            };
            expect(commonReducer(localState, action)).toEqual({
                    authState: false,
                    loading: false,
                    connectServerError: false,
                    getServerDataError: true,
                });
        });
    });
});
