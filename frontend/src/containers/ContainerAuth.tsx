import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import * as actions from 'actions/authActions';
import {Auth, IAuthDispatch, IAuthProps} from 'components/Auth';
import {IAppState} from '../types';

const mapStateToProps = (state: IAppState): IAuthProps => ({
    authState: state.commonReducer.authState,
});

const mapDispatchToProps = (dispatch: Dispatch): IAuthDispatch => ({
    login: async (/*email: string, password: string*/) => {
        await dispatch(actions.login(/*email, password*/));
    },
});

export const ContainerAuth = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
