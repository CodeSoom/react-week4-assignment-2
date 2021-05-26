import { useDispatch, useSelector } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import DataInput from './DataInput';
import { addRestaurant } from '../redux/actions';

jest.mock('react-redux');

describe('DataInput', () => {
  it('renders 등록 button', () => {
    const restaurantData = {
      id: 1,
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    };

    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector(restaurantData));

    const { getByRole } = render(<DataInput />);
    expect(getByRole('button')).toBeInTheDocument();

    fireEvent.click(getByRole('button', { name: '등록' }));
    expect(dispatch).toBeCalledWith(addRestaurant(restaurantData));
  });

  it('renders three inputbox', () => {
    const { getAllByRole } = render(<DataInput />);
    expect(getAllByRole('textbox')).toHaveLength(3);
  });
});
