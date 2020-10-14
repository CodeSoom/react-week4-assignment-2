import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Button from '../src/components/Button';

test('Button', () => {
  const handleClick = jest.fn();
  const { getByText } = render((
    <Button
      onClick={handleClick}
    />
  ));

  expect(getByText(/등록/)).not.toBeNull();

  expect(handleClick).not.toBeCalled();
  fireEvent.click(getByText(/등록/));

  expect(handleClick).toBeCalled();
});
