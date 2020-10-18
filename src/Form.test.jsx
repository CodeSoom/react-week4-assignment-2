import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { inputTypes, initRestaurant } from './fixtures/fixtures';
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

    inputTypes.forEach(({ placeholderName }) => {
      expect(getByPlaceholderText(placeholderName)).not.toBeNull();
    });
  });

  it('handleChange 호출을 확인한다.', () => {
    const { getByPlaceholderText } = formRender(initRestaurant);

    expect(handleChange).not.toBeCalled();

    inputTypes.forEach(({ placeholderName, inputName }) => {
      fireEvent.change(getByPlaceholderText(placeholderName), {
        target: { value: '시카고 피자', name: inputName },
      });
    });
    expect(handleChange).toBeCalled();
  });
});
