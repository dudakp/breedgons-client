import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useRecoilState } from 'recoil';
import { navBarAtom } from '../../../state/atoms';

export default () => {
  const { authState, authService } = useOktaAuth();
  const [page, setPage] = useRecoilState(navBarAtom);
  // const page = useRecoilValue(navbarSelector);

  if (authState.isPending) {
    return <div>Loading...</div>;
  }

  return (
    <h1 className='title'> Please log in </h1>
  );
}; 