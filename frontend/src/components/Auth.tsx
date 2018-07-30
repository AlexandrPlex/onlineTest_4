import * as hash from 'object-hash';
import * as React from 'react';

export interface IAuthProps {
  authState: boolean;
}

export interface IAuthDispatch {
    login: (email: string, password: string) => Promise<any>;
}

export class Auth extends React.Component<IAuthProps & IAuthDispatch> {
    public state = {
        emailValue: '',
        passwordValue: '',
    };
    public onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
        const state: any = {...this.state};
        state[e.currentTarget.name] = e.currentTarget.name === 'passwordValue' ? hash(e.currentTarget.value) : e.currentTarget.value;
        this.setState(state);
    }
    public onHandleSubmit = () => {
        alert(this.props.login(this.state.emailValue, this.state.passwordValue));
    }
    public render() {
        return (
            <React.Fragment>
                <form onSubmit={ (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); } }>
                    <input onChange={this.onChangeInput} type='text' name='loginValue' placeholder='user name' />
                    <input onChange={this.onChangeInput} type='password' name='passwordValue' placeholder='password' />
                    <input onClick={this.onHandleSubmit} type='submit' name='submit'/>
                </form>
            </React.Fragment>
        );
    }
}
