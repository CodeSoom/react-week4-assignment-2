import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      {
        id: 1,
        name: '성원각',
        category: '중식',
        address: '서울시 동작구',
      },
    ],
  }));

  it('식당 리스트를 보여준다.', () => {
    const { getByText } = render((
      <App />
    ));

    expect(dispatch).toBeCalledWith({
      type: 'setRestaurants',
    });

    expect(getByText(/Restaurants/)).not.toBeNull();
    expect(getByText('성원각 | 중식 | 서울시 동작구')).not.toBeNull();
  });
});
