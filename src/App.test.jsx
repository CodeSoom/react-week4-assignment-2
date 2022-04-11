import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const restaurants = [
    { id: 1, name: '도미노피자', category: '양식', address: '강남구' },
    { id: 2, name: '홍콩반점', category: '중식', address: '강북구' },
  ];

  useSelector.mockImplementation((selector) => selector({
    restaurantName: '',
    restaurantCategory: '',
    restuarantAddress: '',
    restaurants,
  }));

  const { queryByText } = render((
    <App />
  ));

  expect(queryByText(/Restaurants/)).not.toBeNull();
  expect(queryByText(/등록/)).not.toBeNull();
  expect(queryByText('도미노피자 | 양식 | 강남구')).not.toBeNull();
  expect(queryByText('홍콩반점 | 중식 | 강북구')).not.toBeNull();
});
