import { fireEvent, render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurantInfo: {
      title: '',
      address: '',
      category: '',
    },
  }));

  it('updateRestaurantInfo가 호출된다', () => {
    const { getByText } = render(<InputContainer />);
    expect(getByText(/등록/)).not.toBeNull();
  });
});
