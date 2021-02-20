import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import AddForm from './AddForm';

describe('AddForm', () => {
  const onChange = jest.fn();

  const initRestaurant = {
    name: '',
    category: '',
    address: '',
  };

  function renderAddForm({ restaurant = initRestaurant }) {
    return render((
      <AddForm
        restaurant={restaurant}
        onChange={onChange}
      />
    ));
  }

  it('input, button을 보여준다.', () => {
    const { queryByText, getByPlaceholderText } = renderAddForm({});

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();

    expect(queryByText(/등록/)).not.toBeNull();
  });

  it('값을 변경하면, 상태값이 변경된다.', () => {
    const { getByPlaceholderText } = renderAddForm({});

    const input = getByPlaceholderText('이름');

    fireEvent.change(input, {
      target: {
        value: '인풋 작성',
      },
    });

    expect(onChange).toBeCalled();

    expect(input.value).toBe('인풋 작성');
  });
});
