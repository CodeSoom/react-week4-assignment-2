import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
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
    ],
  }));

  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText('성원각 | 중식 | 서울시 동작구')).not.toBeNull();
  expect(getByText('시골순두부 | 한식 | 인천시 계양구')).not.toBeNull();
});
