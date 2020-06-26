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
    <div>
      <h1>Restaurants</h1>
      <Input
        informations={informations}
        handleChangeInformations={handleChangeInformations}
        handleClick={handleClick}
      />
    </div>
  );
}
