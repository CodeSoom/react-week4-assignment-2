import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      {
        id: 1,
        name: '한식이 좋아!',
        category: '한식',
        address: '서울시 강남구',
      },
      {
        id: 2,
        name: '중식이 좋아!',
        category: '중식',
        address: '경기도 분당구',
      },
    ],
  }));

  context('with restaurants', () => {
    it('renders each restaurant', () => {
      const { container } = render(<ListContainer />);

      expect(container).toHaveTextContent('한식이 좋아!');
      expect(container).toHaveTextContent('한식');
      expect(container).toHaveTextContent('서울시 강남구');

      expect(container).toHaveTextContent('중식이 좋아!');
      expect(container).toHaveTextContent('중식');
      expect(container).toHaveTextContent('경기도 분당구');
    });
  });
});
