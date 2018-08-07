import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import * as actions from 'actions/authActions';
import {Auth, IAuthDispatch} from 'components/Auth';
import {IAppState} from 'types';

const mapStateToProps = (state: IAppState): IAppState => state;

const mapDispatchToProps = (dispatch: Dispatch): IAuthDispatch => ({
    login: (email: string, password: string) => {
         dispatch(actions.login(email, password));
    },
});

export const ContainerAuth = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
