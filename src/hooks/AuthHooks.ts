import { useOktaAuth } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

const useAuth = (): [(e: FormEvent<HTMLFormElement>, issuer: string, username: string | undefined, password: string | undefined) => void, string | undefined] => {
    const { authService } = useOktaAuth();
    const [sessionToken, setSessionToken] = useState();
    const history = useHistory();


    return [(e, issuer, username, password): void => {
        e.preventDefault();
        const oktaAuth = new OktaAuth({
            // If your app is configured to use the Implicit Flow
            // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
            // you will need to uncomment the below line:
            // pkce: false,
            issuer: issuer
        });
        oktaAuth.signIn({ username, password })
            .then((res: any) => {
                const sessionToken = res.sessionToken;
                setSessionToken(sessionToken);
                // sessionToken is a one-use token, so make sure this is only called once
                authService.redirect({ sessionToken });
                history.push('/home');
            })
            .catch((err: any) => console.log('Found an error', err));
    }, sessionToken];

}

export { useAuth };