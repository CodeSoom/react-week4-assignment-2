import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

describe('RestaurantForm', () => {
  const restaurant = {
    name: '자매수산',
    category: '일식',
    address: '서울시 논현동',
  };

  const handleChange = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderRestaurantForm() {
    return render((
      <RestaurantForm
        restaurant={restaurant}
        onChange={handleChange}
        onClick={handleClick}
      />
    ));
  }

  it('renders restaurant Input label', () => {
    const { queryByLabelText } = renderRestaurantForm();

    expect(queryByLabelText('이름')).toBeNull();
    expect(queryByLabelText('분류')).toBeNull();
    expect(queryByLabelText('주소')).toBeNull();
  });

  it('listens change event', () => {
    const { getByDisplayValue } = renderRestaurantForm();

    expect(getByDisplayValue('자매수산')).not.toBeNull();

    fireEvent.change(getByDisplayValue('자매수산'), {
      target: { value: '라이브볼' },
    });

    expect(handleChange).toBeCalled();
  });

  it('listens click event', () => {
    const { getByText } = renderRestaurantForm();

    fireEvent.click(getByText('등록'));

    expect(handleClick).toBeCalled();
  });
});
