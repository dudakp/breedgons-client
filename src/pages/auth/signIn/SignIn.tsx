import React from "react";
import { useOktaAuth } from '@okta/okta-react';
import { Redirect } from "react-router-dom";
import { SignInForm } from "../../../components/auth/singnInForm/SignInForm";
import './SignIn.styles.scss';

export const SignIn: React.FC<any> = (props: any) => {
    const { authState } = useOktaAuth();

    return authState.isAuthenticated
        ? <Redirect to={{ pathname: '/' }} />
        :
        <div className="columns is-centered is-vcentered is-mobile">
            <div className="column is-narrow has-text-centered sign-in">
                <SignInForm issuer={props.issuer} />
            </div>
        </div>;
};