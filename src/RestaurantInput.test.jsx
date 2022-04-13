import { render, fireEvent } from '@testing-library/react';

import RestaurantInput from './RestaurantInput';

describe('RestaurantInput', () => {
  const handleChange = jest.fn();

  function renderRestaurantInput() {
    return render((
      <RestaurantInput
        id="input-restaurant-name"
        name="name"
        placeholder="이름"
        value="오제제"
        onChange={handleChange}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { queryByDisplayValue, queryByPlaceholderText } = renderRestaurantInput();

    expect(queryByPlaceholderText('이름')).not.toBeNull();
    expect(queryByDisplayValue('오제제')).not.toBeNull();
  });

  it('calls handleChange', () => {
    const { getByPlaceholderText } = renderRestaurantInput();

    fireEvent.change(getByPlaceholderText('이름'), {
      target: { value: '더조은 참치' },
    });

    expect(handleChange).toBeCalled();
  });
});
