import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

const { click } = fireEvent;

function change(target, { value }) {
  fireEvent.change(target, {
    target: { value },
  });
}

describe('InputContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector(restaurants));
    useDispatch.mockReturnValue(dispatch);
  });

  function renderInputContainer() {
    const { container, getByText, getByTitle } = render(<InputContainer />);

    return {
      container,
      inputName: getByTitle(/이름/),
      inputCategory: getByTitle(/분류/),
      inputAddress: getByTitle(/주소/),
      buttonAdd: getByText(/등록/),
    };
  }

  it('calls onChange', () => {
    const {
      inputName,
    } = renderInputContainer();

    change(inputName, { value: restaurants[0].name });
    expect(dispatch).toBeCalledWith({
      type: 'onChange',
      payload: { name: 'name', value: restaurants[0].name },
    });
  });

  it('calls onChange', () => {
    const {
      inputCategory,
    } = renderInputContainer();

    change(inputCategory, { value: restaurants[0].category });
    expect(dispatch).toBeCalledWith({
      type: 'onChange',
      payload: { name: 'category', value: restaurants[0].category },
    });
  });

  it('calls onChange', () => {
    const {
      inputAddress,
    } = renderInputContainer();

    change(inputAddress, { value: restaurants[0].address });
    expect(dispatch).toBeCalledWith({
      type: 'onChange',
      payload: { name: 'address', value: restaurants[0].address },
    });
  });

  it('calls handleClick', () => {
    const {
      buttonAdd,
    } = renderInputContainer();

    expect(buttonAdd).not.toBeNull();

    click(buttonAdd);
    expect(dispatch).toBeCalledWith({
      type: 'onClick',
    });
  });
});
