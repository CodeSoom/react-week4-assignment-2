import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import InputList from './InputList';

describe('InputList', () => {
  const handleChangeName = jest.fn();
  const handleClick = jest.fn();

  const handleChange = () => handleChangeName;

  const restaurant = {
    name: '키와미',
    category: '일식',
    address: '분당구 정자동',
  };

  it('renders elements', () => {
    const { getByDisplayValue, getByText } = render((
      <InputList restaurant={restaurant} onChange={handleChange} onClick={handleClick} />
    ));

    expect(getByDisplayValue(restaurant.name)).toBeInTheDocument();
    expect(getByDisplayValue(restaurant.category)).toBeInTheDocument();
    expect(getByDisplayValue(restaurant.address)).toBeInTheDocument();
    expect(getByText(/등록/));
  });

  it('calls change handler when one of fields change', () => {
    const { getByDisplayValue } = render((
      <InputList restaurant={restaurant} onChange={handleChange} onClick={handleClick} />
    ));

    const nameInput = getByDisplayValue(restaurant.name);

    expect(handleChangeName).not.toBeCalled();

    fireEvent.change(nameInput, {
      target: {
        value: 'something',
      },
    });

    expect(handleChangeName).toBeCalledTimes(1);
  });

  it('calls click handler when button is clicked', () => {
    const { getByText } = render((
      <InputList restaurant={restaurant} onChange={handleChange} onClick={handleClick} />
    ));

    const button = getByText(/등록/);

    expect(handleClick).not.toBeCalled();

    fireEvent.click(button);

    expect(handleClick).toBeCalledTimes(1);
  });
});
