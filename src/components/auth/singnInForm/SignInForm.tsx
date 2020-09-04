import React, { useState } from 'react';
import { SignInFormProps } from './SignInForm.types'
import { useAuth } from '../../../hooks/AuthHooks';
import './SignInForm.styles.scss';
import { useHistory } from 'react-router-dom';

export const SignInForm: React.FC<SignInFormProps> = (props) => {
  const { issuer } = props;

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [handleSubmit, sessionToken] = useAuth();
  

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  if (sessionToken) {
    // Hide form while sessionToken is converted into id/access tokens
    return null;
  }

  return (
    <div className="box login-box">
      <form
        onSubmit={(e) => handleSubmit(e, issuer, username, password)}>
        <div className="columns">
          <div className="column is-full title-logo">
            <figure className="image is-720x240">
              <img alt='placeholder' src="https://bulma.io/images/placeholders/720x240.png" />
            </figure>
          </div>
        </div>
        <div className="columns is-mobile is-centered">
          <div className="column is-four-fifths">
            <div className="field">
              <div className="control">
                <input onChange={handleUsernameChange} className="input input-mail" type="email" placeholder="email" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input onChange={handlePasswordChange} className="input input-password" type="password" placeholder="password" />
              </div>
            </div>
            <div className="field">
              <p className="control has-text-centered">
                <button className="button is-text button-forgot-password"
                  style={{ width: '55%' }}>
                  Forgot password?
                        </button>
              </p>
            </div>
            <div className="field">
              <p className="control has-text-centered">
                <input className="button is-primary button-login"
                  value='Login'
                  type='submit'>
                </input>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
