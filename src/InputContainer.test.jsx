import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  given("state's inputText", () => ({
    inputText: {
      name: given.name,
      type: given.type,
      address: given.address,
    },
  }));

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      inputText: {
        name: given.name, type: given.type, address: given.address,
      },
    }));
  });

  it('handleClick works when clicked', () => {
    given('name', () => '소년식당');
    given('type', () => '소식');
    given('address', () => '내마음속');

    const { queryByText, queryByDisplayValue } = render((<InputContainer />));

    expect(queryByText(/등록/)).not.toBeNull();
    expect(queryByDisplayValue(/소년식당/)).not.toBeNull();
    expect(queryByDisplayValue(/소식/)).not.toBeNull();
    expect(queryByDisplayValue(/내마음속/)).not.toBeNull();

    fireEvent.click(queryByText(/등록/));

    expect(dispatch).toBeCalledWith({ type: 'addRegister' });
  });

  it('handleTextChange works when input filled', () => {
    given('name', () => '');
    given('type', () => '');
    given('address', () => '');

    const { queryAllByPlaceholderText } = render((<InputContainer />));

    expect(queryAllByPlaceholderText(/이름/).value).toEqual('');

    fireEvent.change(queryAllByPlaceholderText(/이름/), {
      target: { value: '변했어요' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: {
        inputText: {
          name: '변했어요',
          type: '',
          address: '',
        },
      },
    });
  });
});
