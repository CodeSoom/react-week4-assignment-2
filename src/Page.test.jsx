import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import Page from './Page';

jest.mock('react-redux');

describe('Page', () => {
  const restaurant = {
    name: '한식당',
    category: '한식',
    address: '강남구',
  };
  const restaurants = [
    {
      id: 1, name: '한식당', category: '한식', address: '강남구',
    },
    {
      id: 2, name: '중식당', category: '중식', address: '송파구',
    },
  ];

  useSelector.mockImplementation((selector) => selector({
    restaurant,
    restaurants,
  }));

  context('when start application', () => {
    it('Restaurants가 보인다.', () => {
      const { container } = render(
        <Page />,
      );

      expect(container).toHaveTextContent('Restaurants');
    });

    it('3개의 input이 있다.', () => {
      const { getAllByRole } = render(
        <Page />,
      );

      const Inputs = getAllByRole('textbox');

      Inputs.forEach((Input) => {
        expect(Input).not.toBeNull();
      });
    });

    it('등록 버튼이 보인다.', () => {
      const { container } = render(
        <Page />,
      );

      expect(container).toHaveTextContent('등록');
    });
  });
});
