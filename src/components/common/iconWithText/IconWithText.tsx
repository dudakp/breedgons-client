import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export const IconWithText = ({ faIcon, text }: { faIcon: IconDefinition, text: string }) => {
  return (
    <>
      <FontAwesomeIcon icon={faIcon} style={{marginRight: '.3rem'}} />
      <p>{text}</p>
    </>
  )
}
