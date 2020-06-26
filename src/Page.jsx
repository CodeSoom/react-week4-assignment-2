import React from 'react';

import { render } from 'react-dom';
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

  return (
    <div>
      <h1>Restaurants</h1>
      <Input
        informations={informations}
        handleChangeInformations={handleChangeInformations}
      />
    </div>
  );
}
