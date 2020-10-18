import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    name: '마녀주방',
    category: '한식',
    location: '서울사 강남구',
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderInputContainer() {
    return render((
      <InputContainer />
    ));
  }

  it('show aform for add restaurant\'s info', () => {
    const { getByPlaceholderText, getByText } = renderInputContainer();

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();
  });

  it('add restautant with input value', () => {
    const { getByText } = renderInputContainer();

    fireEvent.click(getByText(/등록/));

    expect(dispatch).toBeCalledWith({
      type: 'addRestaurant',
    });
  });

  it('change restrant name input', () => {
    const { getByPlaceholderText } = renderInputContainer();
    const name = '김가네';

    fireEvent.change(getByPlaceholderText(/이름/), { target: { value: name } });

    expect(dispatch).toBeCalledWith({
      type: 'updateRestaurantName',
      payload: {
        name,
      },
    });
  });

  it('change restrant category input', () => {
    const { getByPlaceholderText } = renderInputContainer();
    const category = '일식';

    fireEvent.change(getByPlaceholderText(/분류/), { target: { value: category } });

    expect(dispatch).toBeCalledWith({
      type: 'updateRestaurantCategory',
      payload: {
        category,
      },
    });
  });

  it('change restrant location input', () => {
    const { getByPlaceholderText } = renderInputContainer();
    const location = '서울시 성북구';

    fireEvent.change(getByPlaceholderText(/주소/), { target: { value: location } });

    expect(dispatch).toBeCalledWith({
      type: 'updateRestaurantLocation',
      payload: {
        location,
      },
    });
  });
});
