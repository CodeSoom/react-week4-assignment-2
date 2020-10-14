import React from 'react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

test('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      {
        name: '마녀주방',
        classification: '한식',
        location: '서울시 강남구',
      },
      {
        name: '시카고피자',
        classification: '양식',
        location: '이태원동',
      },
    ],
  }));

  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/마녀주방/)).not.toBeNull();
});
