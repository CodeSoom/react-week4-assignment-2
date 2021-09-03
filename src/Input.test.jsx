import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import Input from './Input';

describe('Input', () => {
  const handleOnChange = jest.fn();

  given('value', () => '');
  given('ariaLabel', () => '');

  const renderInput = render((
    <Input
      handleOnChange={handleOnChange}
      value={given.value}
      ariaLabel={given.ariaLabel}
    />
  ));

  it('renders input field', () => {
    given('ariaLabel', () => 'restaurantName');

    const { getByLabelText } = renderInput();

    const restaurantName = getByLabelText('restaurantName');

    expect(restaurantName).not.toBeNull();
  });

  it('renders input value', () => {
    given('ariaLabel', () => 'restaurantName');
    given('value', () => '시카고피자');

    const { getByLabelText } = renderInput();

    const restaurantName = getByLabelText('restaurantName');

    expect(restaurantName.value).toBe('시카고피자');
  });

  it('listens onChange event', () => {
    given('ariaLabel', () => 'restaurantName');

    const { getByLabelText } = renderInput();

    expect(handleOnChange).not.toBeCalled();

    fireEvent.change(getByLabelText('restaurantName'), {
      target: { value: '시카고피자' },
    });

    expect(handleOnChange).toBeCalled();
  });
});
