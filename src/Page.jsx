import React from 'react';

import Input from './Input';

export default function Page() {
  const informations = {
    name: '',
    category: '',
    address: '',
  };

  return (
    <div>
      <h1>Restaurants</h1>
      <Input
        informations={informations}
      />
    </div>
  );
}
