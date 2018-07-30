import * as React from 'react';

export interface IHeaderProps {
  authState: boolean;
}

export class Header extends React.PureComponent<IHeaderProps> {
  public render() {
    return (
      <header>
        <nav>
        <span><a href='#'>Online tester</a></span>
            {
              this.props.authState ?
              <ul>
                <li><a href='#'>Выйти</a></li>
              </ul>
              :
              null
            }
        </nav>
      </header>
    );
  }
}
