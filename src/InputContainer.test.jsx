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

  it('InputContainer 컴포넌트가 잘 렌더링 된다', () => {
    const { getByText } = render(<InputContainer />);
    expect(getByText(/등록/)).not.toBeNull();
  });

  it('updateRestaurantInfo가 호출된다', () => {
    const { getByPlaceholderText } = render(<InputContainer />);

    fireEvent.change(getByPlaceholderText(/이름/), { target: { value: '맥도날드' } });

    expect(dispatch).toHaveBeenCalledWith({
      type: 'updateRestaurantInfo',
      payload: {
        name: 'title',
        value: '맥도날드',
      },
    });
  });

  it('addRestaurants가 호출된다', () => {
    const { getByRole } = render(<InputContainer />);

    fireEvent.click(getByRole('button'));

    expect(dispatch).toHaveBeenCalledWith({
      type: 'addRestaurants',
    });
  });
});
