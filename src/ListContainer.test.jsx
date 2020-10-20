import React from 'react';

import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

import { restaurants } from '../fixtures/fixtures';

jest.mock('react-redux');

describe('ListContainer', () => {
  function restaurantList() {
    return render((
      <ListContainer />
    ));
  }

  context('with restaurants', () => {
    it('show restaurant', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants,
      }));

      const { container } = restaurantList();
      expect(container).toHaveTextContent('마녀주방 | 한식 | 서울시 강남구');
    });
  });

  context('without restaurants', () => {
    it("doesn't work", () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [],
      }));

      const { container } = restaurantList();
      expect(container.firstChild).toBeEmptyDOMElement();
    });
  });
});
