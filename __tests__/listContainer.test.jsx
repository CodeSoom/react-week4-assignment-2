import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from '../src/containers/ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { name: '마녀주방', category: '한식', address: '서울시 성북구' },
      { name: '시카고피자', category: '양식', address: '서울시 아태원' },
    ],
  }));

  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/마녀주방/)).not.toBeNull();
  expect(getByText(/시카고피자/)).not.toBeNull();
});
