import React from 'react';

import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const restaurants = [
    {
      id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
    },
    {
      id: 2, name: '시카고피자', category: '양식', address: '이태원동',
    },
    {
      id: 3, name: '키와미', category: '일식', address: '분당구 정자동',
    },
  ];

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/마녀주방/)).not.toBeNull();
  expect(getByText(/시카고피자/)).not.toBeNull();
  expect(getByText(/키와미/)).not.toBeNull();
});
