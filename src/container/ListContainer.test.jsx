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
      name: '홍초밥',
      category: '일식',
      address: '서울시 망원동',
    },
    {
      id: 102,
      name: '감성타코',
      category: '양식',
      address: '신사동 가로수길',
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
    expect(container).toHaveTextContent('홍초밥');
    expect(container).toHaveTextContent('감성타코');

    expect(container).toHaveTextContent('서울시 강남구');
    expect(container).toHaveTextContent('서울시 망원동');
    expect(container).toHaveTextContent('신사동 가로수길');

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('일식');
    expect(container).toHaveTextContent('양식');
  });
});
