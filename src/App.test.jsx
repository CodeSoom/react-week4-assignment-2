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
          id: 1, title: '시카고피자', kind: '양식', address: '이태원동',
        },
        {
          id: 2, title: '키와미', kind: '일식', address: '분당구',
        },
      ];

      useSelector.mockImplementation((selector) => selector({
        restaurants,
      }));

      const { getByText } = render(<App />);
      restaurants.forEach(({ title, kind, address }) => {
        expect(getByText(`${title} | ${kind} | ${address}`));
      });
    });
  });
});
