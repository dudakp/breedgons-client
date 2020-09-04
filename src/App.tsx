import React from 'react';
import SecuredApp from './components/auth/securedApp/SecuredApp';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import 'bulma';
import '@fortawesome/fontawesome-free';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <SecuredApp></SecuredApp>
      </Router>
    </RecoilRoot>
  );
}

export default App;
 