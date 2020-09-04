import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { NavBar } from '../../../components/common/navbar/NavBar';

export default () => {

  const { authState, authService } = useOktaAuth();

  return (
    <NavBar
      logoutFunction={authService.logout}
      isAuthenticated={authState.isAuthenticated}
    ></NavBar>)
};