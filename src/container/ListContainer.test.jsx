import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const restaurants = [
    {
      id: 100,
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    },
    {
      id: 101,
      name: '시카고피자',
      category: '양식',
      address: '이태원동',
    },
    {
      id: 102,
      name: '키와미',
      category: '일식',
      address: '분당구 정자동',
    },
  ];

  it('shows restaurants list', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));

    const { container } = render((
      <ListContainer />
    ));

    expect(container).toHaveTextContent('마녀주방');
    expect(container).toHaveTextContent('시카고피자');
    expect(container).toHaveTextContent('키와미');

    expect(container).toHaveTextContent('서울시 강남구');
    expect(container).toHaveTextContent('이태원동');
    expect(container).toHaveTextContent('분당구 정자동');

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('양식');
    expect(container).toHaveTextContent('일식');
  });
});
