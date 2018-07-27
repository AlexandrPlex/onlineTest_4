// Global State
export interface IAppState {
    commonReducer: ICommonState;
}

export interface ICommonState {
    authState: boolean;
    loading: boolean;
    connectServerError: boolean;
    getServerDataError: boolean;
}
