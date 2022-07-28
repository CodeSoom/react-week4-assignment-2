import { fireEvent, render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  beforeEach(() => {
    render(<InputContainer />);
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
        name: '이촌떡볶이',
      },
    });
  });

  it('listens to change event on changeType', () => {
    const type = screen.getByPlaceholderText('분류');
    fireEvent.change(type, { target: { value: '분식' } });

    expect(dispatch).toBeCalledWith({
      type: 'changeType',
      payload: {
        type: '분식',
      },
    });
  });

  it('listens to change event on changeLocation', () => {
    const location = screen.getByPlaceholderText('주소');
    fireEvent.change(location, { target: { value: '용산구 이촌동' } });

    expect(dispatch).toBeCalledWith({
      type: 'changeLocation',
      payload: {
        location: '용산구 이촌동',
      },
    });
  });

  it('listens to click event on addRestaurant', () => {
    fireEvent.click(screen.getByText('등록'));

    expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });
  });
});
