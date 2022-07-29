import { fireEvent, render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import NewRestaurantContainer from './NewRestaurantContainer';

jest.mock('react-redux');

describe('NewRestaurantContainer', () => {
  beforeEach(() => {
    render(<NewRestaurantContainer />);
  });

  useSelector.mockImplementation((selector) => selector({
    restaurantName: '칸지고고',
    restaurantType: '중식',
    restaurantLocation: '원효로',
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('listens to change event on changeName', () => {
    const name = screen.getByPlaceholderText('이름');

    fireEvent.change(name, { target: { value: '이촌떡볶이' } });

    expect(dispatch).toBeCalledWith({
      type: 'changeName',
      payload: {
        input: '이촌떡볶이',
      },
    });
  });

  it('listens to change event on changeCategory', () => {
    const type = screen.getByPlaceholderText('분류');

    fireEvent.change(type, { target: { value: '분식' } });

    expect(dispatch).toBeCalledWith({
      type: 'changeCategory',
      payload: {
        input: '분식',
      },
    });
  });

  it('listens to change event on changeAddress', () => {
    const location = screen.getByPlaceholderText('주소');

    fireEvent.change(location, { target: { value: '용산구 이촌동' } });

    expect(dispatch).toBeCalledWith({
      type: 'changeAddress',
      payload: {
        input: '용산구 이촌동',
      },
    });
  });

  it('listens to click event on addRestaurant', () => {
    fireEvent.click(screen.getByText('등록'));

    expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });
  });
});
