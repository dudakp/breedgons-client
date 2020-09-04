import React, { useEffect } from 'react'
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
    useEffect(() => console.log(process.env), []);


    return (
        <Security
            issuer={process.env.REACT_APP_OKTA_ISSUER}
            clientId={process.env.REACT_APP_OKTA_CLIENT_ID}
            redirectUri={window.location.origin + '/implicit/callback'}
            onAuthRequired={onAuthRequired}
            pkce={true} >
            <NavBar></NavBar>
            <Route path='/' exact={true} component={ApplicationHome} />
            <SecureRoute path='/home' component={Home} />
            <Route path='/login' render={() => <SignIn issuer={process.env.REACT_APP_OKTA_ISSUER} />} />
            <Route path='/implicit/callback' component={LoginCallback} />
        </Security>
    );
}
