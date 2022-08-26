import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    name: '마녀주방',
    sort: '한식',
    address: '서울시 강남구',
  }));

  const { getByText, getByPlaceholderText } = render((
    <App />
  ));

  expect(getByText(/Restaurants/)).not.toBeNull();

  expect(getByPlaceholderText(/이름/)).not.toBeNull();
  expect(getByPlaceholderText(/분류/)).not.toBeNull();
  expect(getByPlaceholderText(/주소/)).not.toBeNull();

  expect(getByText(/등록/)).not.toBeNull();
});
