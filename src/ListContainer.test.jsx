import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  context('레스토랑 목록이 있으면', () => {
    it('목록을 보여준다', () => {
      const restaurants = [
        {
          id: 1, title: '마녀주방', kind: '한식', address: '서울시 강남구',
        },
        {
          id: 2, title: '홍콩반점', kind: '중식', address: '인천 주안',
        },
        {
          id: 3, title: '스시천', kind: '일식', address: '인천 남동구',
        },
      ];

      useSelector.mockImplementation((selector) => selector({
        restaurants,
      }));

      const { getByText } = render((
        <ListContainer />
      ));

      restaurants.forEach(({ title, kind, address }) => {
        expect(getByText(`${title} | ${kind} | ${address}`)).toBeInTheDocument();
      });
    });
  });
});
