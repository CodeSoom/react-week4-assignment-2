import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from '../App';

jest.mock('react-redux');

test('App', () => {
  const restaurants = [
    {
      id: 1,
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    },
    {
      id: 2,
      name: '시카고피자',
      category: '양식',
      address: '이태원동',
    },
  ];

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({ restaurants }));

  const {
    getByText,
    getByRole,
    getByPlaceholderText,
  } = render(<App />);

  expect(getByRole('heading', { name: /Restaurants/i })).toBeInTheDocument();

  restaurants.forEach((restaurant) => {
    expect(getByText(`${restaurant.name} | ${restaurant.category} | ${restaurant.address}`)).toBeInTheDocument();
  });

  expect(getByPlaceholderText('이름')).toBeInTheDocument();
  expect(getByPlaceholderText('분류')).toBeInTheDocument();
  expect(getByPlaceholderText('주소')).toBeInTheDocument();
  expect(getByRole('button', { name: /등록/ })).toBeInTheDocument();
});
