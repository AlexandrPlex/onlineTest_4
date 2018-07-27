import * as React from 'react';

export interface IHeaderProps {
  authState: boolean;
}

export class Header extends React.Component<IHeaderProps> {
  public render() {
    return (
      <header>
        <nav>
        <span>Online tester</span>
          <ul>
            <li><a href='#'>Главная</a></li>
            {
              this.props.authState ?
              <li><a href='#'>Выйти</a></li>
              :
              <li><a href='#'>Войти</a></li>
            }
          </ul>
        </nav>
      </header>
    );
  }
}
