import React from 'react';

import { useSelector } from 'react-redux';

import Form from './Form';

export default function FormContainer() {
  const { inputs } = useSelector((state) => ({
    inputs: state.inputs,
  }));

  return (
    <Form inputs={inputs} />
  );
}
