import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';

import { DevTools } from 'containers/DevTools';
import { router } from 'router';
import { isProduction } from 'utils';

interface IAppProps {
  store: Store<any>;
  history: History;
}

export const App = (props: IAppProps) => (
  <Provider store={props.store}>
    <ConnectedRouter history={props.history}>
      <div>
        {router}
        {!isProduction && <DevTools />}
      </div>
    </ConnectedRouter>
  </Provider>
);
