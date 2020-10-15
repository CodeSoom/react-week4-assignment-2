import React from 'react';

import { render, fireEvent } from '@testing-library/react';

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

  inputs.forEach(({ value }) => {
    expect(getByDisplayValue(value)).not.toBeNull();
  });

  expect(container).toHaveTextContent('등록');

  const textBoxes = getAllByRole('textbox');

  expect(textBoxes).not.toBeNull();

  textBoxes.forEach((textBox) => {
    fireEvent.change(textBox, { target: { value: '마녀주방' } });
  });

  expect(dispatch).toBeCalledTimes(3);
});
