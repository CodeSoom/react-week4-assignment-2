import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import Input from './Input';

describe('Input', () => {
  const onChange = jest.fn();

  given('value', () => '');
  given('ariaLabel', () => '');
  given('placeholder', () => '');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderInput = () => render((
    <Input
      onChange={onChange}
      value={given.value}
      ariaLabel={given.ariaLabel}
      placeholder={given.placeholder}
      name="name"
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
    given('placeholder', () => '이름');

    const { getByLabelText } = renderInput();

    const restaurantName = getByLabelText('restaurantName');

    expect(restaurantName.value).toBe('시카고피자');
    expect(restaurantName.name).toBe('name');
  });

  it('listens change event', () => {
    given('ariaLabel', () => 'restaurantName');

    const { getByLabelText } = renderInput();

    expect(onChange).not.toBeCalled();

    fireEvent.change(getByLabelText('restaurantName'), {
      target: { value: '시카고피자' },
    });

    expect(onChange).toBeCalled();
  });
});
