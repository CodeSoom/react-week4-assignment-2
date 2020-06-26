import React from 'react';

import Input from './Input';

export default function Page() {
  const informations = {
    name: '',
    category: '',
    address: '',
  };

  function handleChangeInformations() {
    return null;
  }

  function handleClick() {
    return null;
  }

  return (
    <Input
      informations={informations}
      handleChangeInformations={handleChangeInformations}
      handleClick={handleClick}
    />
  );
}
