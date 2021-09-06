import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const onChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderInput = () => render((
    <Input
      onChange={onChange}
      value="시카고피자"
      ariaLabel="restaurantName"
      placeholder="이름"
      name="name"
    />
  ));

  it('renders input field', () => {
    const { getByLabelText } = renderInput();

    const restaurantName = getByLabelText('restaurantName');

    expect(restaurantName).not.toBeNull();
  });

  it('renders input value', () => {
    const { getByLabelText } = renderInput();

    const restaurantName = getByLabelText('restaurantName');

    expect(restaurantName.value).toBe('시카고피자');
  });

  it('listens change event', () => {
    const { getByLabelText } = renderInput();

    expect(onChange).not.toBeCalled();

    fireEvent.change(getByLabelText('restaurantName'), {
      target: { value: '맥도날드' },
    });

    expect(onChange).toBeCalled();
  });
});
