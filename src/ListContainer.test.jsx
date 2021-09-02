import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

test('ListContainer', () => {
  const restaurants = [
    {
      id: 1,
      name: '성원각',
      category: '중식',
      address: '서울시 동작구',
    },
    {
      id: 2,
      name: '시골순두부',
      category: '한식',
      address: '인천시 계양구',
    },
  ];

  const { getByText } = render((
    <ListContainer
      restaurants={restaurants}
    />
  ));

  expect(getByText(/성원각/)).not.toBeNull();
  expect(getByText(/중식/)).not.toBeNull();
  expect(getByText(/서울시 동작구/)).not.toBeNull();
  expect(getByText(/시골순두부/)).not.toBeNull();
  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/인천시 계양구/)).not.toBeNull();
});
