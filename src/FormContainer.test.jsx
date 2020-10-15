import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import FormContainer from './FormContainer';

jest.mock('react-redux');

const dispatch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  useDispatch.mockImplementation(() => dispatch);
});

test('FormContainer', () => {
  const inputs = [
    { placeholder: '이름', value: '시카고피자' },
    { placeholder: '분류', value: '양식' },
    { placeholder: '주소', value: '이태원동' },
  ];

  useSelector.mockImplementation(() => ({
    inputs,
  }));

  const { container, getAllByRole, getByDisplayValue } = render((
    <FormContainer />
  ));

  expect(getAllByRole('textbox')).not.toBeNull();
  expect(container).toHaveTextContent('등록');

  inputs.forEach(({ value }) => {
    expect(getByDisplayValue(value)).not.toBeNull();
  });
});
