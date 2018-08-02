import {connect} from 'react-redux';
// import {Dispatch} from 'redux';

import * as actions from 'actions/authActions';
import {Auth} from 'components/Auth';

const mapDispatchToProps = (dispatch: any) => ({
  logIn: (email: any, password: any) => dispatch(actions.login(email, password)),
});

export const ContainerAuth = connect(
  mapDispatchToProps,
)(Auth);
