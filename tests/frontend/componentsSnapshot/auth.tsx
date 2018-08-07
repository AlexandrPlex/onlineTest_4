import {Auth, IAuthDispatch} from 'components/Auth';
import React from 'react';
import renderer from 'react-test-renderer';

describe('[SnapShot] Auth test', () => {
    it(' - Auth', ( ) => {
        const state: IAuthDispatch = {
            login: () => 0,
        };
        const tree = renderer.create( <Auth { ...state }/>);
        expect(tree).toMatchSnapshot();
    });
});
