import {connect} from 'react-redux';

import {Header, IHeaderProps} from 'components/Header';
import {IAppState} from '../types';

const mapStateToProps = (state: IAppState): IHeaderProps => ({
    authState: state.commonReducer.authState,
});

export const ContainerHeader = connect(
  mapStateToProps,
)(Header);
