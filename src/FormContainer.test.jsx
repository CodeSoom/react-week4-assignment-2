import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import FormContainer from './FormContainer';

jest.mock('react-redux');

describe('FormContainer Component', () => {
  const inputs = [
    {
      name: 'name',
      placeholder: '이름',
      value: '',
    },
    {
      name: 'category',
      placeholder: '분류',
      value: '',
    },
    {
      name: 'address',
      placeholder: '주소',
      value: '',
    },
  ];

  it('Show List(restaurants)', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      inputs,
    }));

    const { getByText, getByPlaceholderText } = render((
      <FormContainer />
    ));

    fireEvent.change(getByPlaceholderText('이름'), { target: { value: '코드숨식당' } });
    expect(dispatch).toBeCalledWith({
      type: 'updateText',
      payload: {
        name: 'name',
        value: '코드숨식당',
      },
    });

    const addButton = getByText('등록');

    expect(addButton).not.toBeNull();
    fireEvent.click(addButton);
    expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });
  });
});
