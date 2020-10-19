import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { initRestaurant } from './fixtures/fixtures';
import Form from './Form';

describe('Form', () => {
  const handleChange = jest.fn();

  const formRender = (restaurant) => render((
    <Form
      restaurant={restaurant}
      onChange={handleChange}
    />
  ));

  it('"input"이 보인다.', () => {
    const { getByPlaceholderText } = formRender(initRestaurant);

    ['이름', '분류', '주소'].forEach((placeholder) => {
      expect(getByPlaceholderText(placeholder)).not.toBeNull();
    });
  });

  it('handleChange 호출을 확인한다.', () => {
    const { getByPlaceholderText } = formRender(initRestaurant);

    expect(handleChange).not.toBeCalled();

    fireEvent.change(getByPlaceholderText('이름'), {
      target: { value: '시카고 피자' },
    });

    expect(handleChange).toBeCalled();
  });
});
