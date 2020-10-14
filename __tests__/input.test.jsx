import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Input from '../src/components/Input';

test('Input', () => {
  const handleChange = jest.fn();
  const { getByDisplayValue, getByPlaceholderText } = render((
    <Input
      placeholder="메뉴"
      value="시카고피자"
      onChange={handleChange}
    />
  ));

  expect(getByDisplayValue(/시카고피자/)).not.toBeNull();

  fireEvent.change(getByPlaceholderText('메뉴'), {
    target: { value: '고르곤졸라' },
  });

  expect(handleChange).toBeCalled();
});
