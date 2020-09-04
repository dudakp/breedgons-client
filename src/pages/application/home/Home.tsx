import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import './Home.style.scss';

export default () => {

  const { authState, authService } = useOktaAuth();
  const user = authState.isAuthenticated ? JSON.parse(atob(authState.accessToken.split('.')[1])).firstName : '';

  return (
    <div className="columns has-text-centered">
      <div className="column">
        <h1 className='title'>Welcome to breedgons, {user}</h1>
        {user === 'Patka' ? (<><div id="heart"></div><h2 className='subtitle'>Ľúbim ťa s celého srdiečka</h2></>) : ''}
      </div>
    </div>
  )
};