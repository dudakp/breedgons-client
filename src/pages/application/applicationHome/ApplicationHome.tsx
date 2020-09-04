import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { NavBar } from '../../../components/common/navbar/NavBar';
import { useRecoilState, useRecoilValue } from 'recoil';
import { navBarAtom, navbarSelector } from '../../../state/atoms';

export default () => {
  const { authState, authService } = useOktaAuth();
  const [page, setPage] = useRecoilState(navBarAtom);
  // const page = useRecoilValue(navbarSelector);

  if (authState.isPending) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <NavBar></NavBar> */}
      <h1 className='title'>{page.page}</h1>
    </>
  );
}; 