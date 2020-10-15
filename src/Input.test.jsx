import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();

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

    expect(handleChange).not.toBeCalled();

    fireEvent(nameInput, {
      target: {
        name: 'something',
      },
    });

    expect(handleChange).toBeCalledTimes(1);
  });

  it('calls change handler when category changes', () => {
    const { getByDisplayValue } = render((
      <Input restaurant={restaurant} onChange={handleChange} />
    ));

    const categoryInput = getByDisplayValue(restaurant.category);

    expect(handleChange).not.toBeCalled();

    fireEvent(categoryInput, {
      target: {
        name: 'something',
      },
    });

    expect(handleChange).toBeCalledTimes(1);
  });

  it('calls change handler when address change', () => {
    const { getByDisplayValue } = render((
      <Input restaurant={restaurant} onChange={handleChange} />
    ));

    const addressInput = getByDisplayValue(restaurant.address);

    expect(handleChange).not.toBeCalled();

    fireEvent(addressInput, {
      target: {
        name: 'something',
      },
    });

    expect(handleChange).toBeCalledTimes(1);
  });
});
