import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Input from './InputList';

describe('Input', () => {
  const handleChangeName = jest.fn();
  const handleChangeCategory = jest.fn();
  const handleChangeAddress = jest.fn();

  const handleChange = (field) => ({
    name: handleChangeName,
    category: handleChangeCategory,
    address: handleChangeAddress,
  }[field]);

  const restaurant = {
    name: '키와미',
    category: '일식',
    address: '분당구 정자동',
  };

  it('renders elements with restaurant', () => {
    const { getByDisplayValue, getByText } = render((
      <Input restaurant={restaurant} onChange={handleChange} />
    ));

    expect(getByDisplayValue(restaurant.name)).toBeInTheDocument();
    expect(getByDisplayValue(restaurant.category)).toBeInTheDocument();
    expect(getByDisplayValue(restaurant.address)).toBeInTheDocument();
    expect(getByText(/등록/));
  });

  it('calls change handler when name change', () => {
    const { getByDisplayValue } = render((
      <Input restaurant={restaurant} onChange={handleChange} />
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

  it('calls change handler when category changes', () => {
    const { getByDisplayValue } = render((
      <Input restaurant={restaurant} onChange={handleChange} />
    ));

    const categoryInput = getByDisplayValue(restaurant.category);

    expect(handleChangeCategory).not.toBeCalled();

    fireEvent.change(categoryInput, {
      target: {
        value: 'something',
      },
    });

    expect(handleChangeCategory).toBeCalledTimes(1);
  });

  it('calls change handler when address change', () => {
    const { getByDisplayValue } = render((
      <Input restaurant={restaurant} onChange={handleChange} />
    ));

    const addressInput = getByDisplayValue(restaurant.address);

    expect(handleChangeAddress).not.toBeCalled();

    fireEvent.change(addressInput, {
      target: {
        value: 'something',
      },
    });

    expect(handleChangeAddress).toBeCalledTimes(1);
  });
});
