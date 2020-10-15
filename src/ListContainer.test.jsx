import React from 'react';
import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

test('ListContainer', () => {
  const restaurants = [
    { name: '마녀주방', category: '한식', address: '서울시 강남구' },
    { name: '시카고피자', category: '양식', address: '이태원동' },
  ];

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { container } = render((
    <ListContainer />
  ));

  expect(container).toHaveTextContent(restaurants[0].name);
});
