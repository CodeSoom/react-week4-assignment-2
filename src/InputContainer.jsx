import React from 'react';

import { useSelector } from 'react-redux';

import Input from './Input';

export default function Page() {
  const informations = useSelector((state) => state.informations);

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
