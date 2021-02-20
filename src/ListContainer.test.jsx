import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('ListContainer', () => {
  context('with information', () => {
    it('renders restaurant information', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [
          {
            id: 1,
            name: '마녀주방',
            category: '한식',
            address: '서울시 강남구',
          },
        ],
      }));

      const { getByText } = render(<ListContainer />);

      expect(getByText(/마녀주방/)).not.toBeNull();
      expect(getByText(/한식/)).not.toBeNull();
      expect(getByText(/서울시 강남구/)).not.toBeNull();
    });
  });

  context('without information', () => {
    it('renders nothing', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [],
      }));

      const { getByText } = render(<ListContainer />);

      expect(getByText(/입력된 레스토랑 정보가 없습니다/)).not.toBeNull();
    });
  });
});
