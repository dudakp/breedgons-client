import React from 'react'
import { useHistory, Route } from 'react-router-dom';
import { SignIn } from '../../../pages/auth/signIn/SignIn';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import ApplicationHome from '../../../pages/application/applicationHome/ApplicationHome';
import Home from '../../../pages/application/home/Home';
import { NavBar } from '../../common/navbar/NavBar';

interface Props {

}

export default (props: Props) => {
    const history = useHistory();
    const onAuthRequired = () => {
        history.push('/login');
    };

    return (
        <Security
            issuer='https://dev-132666.okta.com/oauth2/default'
            clientId='0oau1y7y3iU4F0T5i4x6'
            redirectUri={window.location.origin + '/implicit/callback'}
            onAuthRequired={onAuthRequired}
            pkce={true} >
            <NavBar></NavBar>
            <Route path='/' exact={true} component={ApplicationHome} />
            <SecureRoute path='/home' component={Home} />
            <Route path='/login' render={() => <SignIn issuer='https://dev-132666.okta.com/oauth2/default' />} />
            <Route path='/implicit/callback' component={LoginCallback} />
        </Security>
    );
}
