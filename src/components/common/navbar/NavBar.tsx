import React, { useState } from 'react';
import { NavBarProps } from './NavBar.types';
import { IconWithText } from '../iconWithText/IconWithText';
import { faPaw, faStore } from '@fortawesome/free-solid-svg-icons';
import './NavBar.styles.scss';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { navBarAtom } from '../../../state/atoms';
import { useOktaAuth } from '@okta/okta-react';

export const NavBar = (props: NavBarProps) => {

  const [navbarBurgerActive, setNavbarBurgerActive] = useState(false);
  const history = useHistory();
  const [page, setPage] = useRecoilState(navBarAtom);
  const { authState, authService } = useOktaAuth();

  const handleNavbarToggle = (): void => setNavbarBurgerActive(navbarBurgerActive ? false : true);

  const redirectToLogin = (history: any): ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined => {
    return () => history.push('/login');
  }


  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item navbar-logo">
          <h1 className='is-h1'>BreedGons</h1>
        </a>

        <a
          className={`navbar-burger burger ${navbarBurgerActive ? 'is-active' : ''}`}
          onClick={handleNavbarToggle}
          role="button"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample"
        className={`navbar-menu ${navbarBurgerActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a className="navbar-item"
            onClick={() => setPage({ ...page, page: 'dragons' })}>
            <IconWithText faIcon={faPaw} text='gons'></IconWithText>
          </a>
          <a className="navbar-item"
            onClick={() => setPage({ ...page, page: 'marketplace' })}>
            <IconWithText faIcon={faStore} text='market'></IconWithText>
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button">
                <strong>10 owned</strong>
              </a>
              <a
                className="button is-light"
                onClick={authState.isAuthenticated
                  ? authService.logout
                  : redirectToLogin(history)}
              >
                {authState.isAuthenticated ? 'Logout' : 'Login'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
