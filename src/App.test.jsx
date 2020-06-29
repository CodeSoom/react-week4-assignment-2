import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('<App />', () => {
  context('레스토랑 목록이 있으면', () => {
    it('화면에 보여준다.', () => {
      const restaurants = [
        {
          id: 1, name: '시카고피자', category: '양식', address: '이태원동',
        },
        {
          id: 2, name: '키와미', category: '일식', address: '분당구',
        },
      ];

      useSelector.mockImplementation((selector) => selector({
        restaurants,
      }));

      const { getByText } = render(<App />);
      restaurants.forEach(({ name, category, address }) => {
        expect(getByText(`${name} | ${category} | ${address}`));
      });
    });
  });
});
