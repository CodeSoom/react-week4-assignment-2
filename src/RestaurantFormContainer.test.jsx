import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantFormContainer from './RestaurantFormContainer';

jest.mock('react-redux');

const dispatch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();

  useSelector.mockImplementation((selector) => selector({
    id: 0,
    name: '',
    category: '',
    address: '',
  }));

  useDispatch.mockImplementation(() => dispatch);
});

describe('RestaurantFormContainer', () => {
  function renderInput() {
    return render((
      <RestaurantFormContainer />
    ));
  }

  it('changes restaurant inputs', () => {
    const { getByPlaceholderText } = renderInput();

    expect(getByPlaceholderText(/이름/)).not.toBeNull();

    fireEvent.change(getByPlaceholderText(/이름/), {
      target: { value: '마녀주방' },
    });

    expect(dispatch).toBeCalledWith(({
      type: 'updateRestaurantInformation',
      payload: {
        key: 'name',
        value: '마녀주방',
      },
    }));

    fireEvent.change(getByPlaceholderText(/분류/), {
      target: { value: '한식' },
    });

    expect(dispatch).toBeCalledWith(({
      type: 'updateRestaurantInformation',
      payload: {
        key: 'category',
        value: '한식',
      },
    }));

    fireEvent.change(getByPlaceholderText(/주소/), {
      target: { value: '서울시 강남구' },
    });

    expect(dispatch).toBeCalledWith(({
      type: 'updateRestaurantInformation',
      payload: {
        key: 'address',
        value: '서울시 강남구',
      },
    }));
  });

  it('adds restaurant infromation', () => {
    const { getByText } = renderInput();

    fireEvent.click(getByText(/등록/));

    expect(dispatch).toBeCalledWith(({
      type: 'addRestaurantInformation',
    }));
  });
});
