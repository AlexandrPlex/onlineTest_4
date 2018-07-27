import {Header, IHeaderProps} from 'components/Header';
import React from 'react';
import renderer from 'react-test-renderer';

describe('[SnapShot] Header test', () => {
    it('Auth true', ( ) => {
        const state: IHeaderProps = {
            authState: true,
        };
        const tree = renderer.create( <Header { ...state }/>);
        expect(tree).toMatchSnapshot();
    });
    it('Auth false', ( ) => {
        const state: IHeaderProps = {
            authState: false,
        };
        const tree = renderer.create( <Header { ...state }/>);
        expect(tree).toMatchSnapshot();
    });
});
