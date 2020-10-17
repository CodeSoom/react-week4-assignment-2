import React from 'react';

import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  function restaurantList() {
    return render((
      <ListContainer />
    ));
  }

  describe('first loaded', () => {
    context('with restaurants', () => {
      it('show restaurant', () => {
        useSelector.mockImplementation((selector) => selector({
          restaurants: [
            { name: '마녀주방', category: '한식', location: '서울사 강남구' },
          ],
        }));

        const { getByText } = restaurantList();
        expect(getByText(/마녀주방 | 한식 | 서울시 강남구/)).not.toBeNull();
      });
    });

    context('without restaurants', () => {
      it("doesn't work", () => {
        useSelector.mockImplementation((selector) => selector({
          restaurants: [],
        }));

        const { container } = restaurantList();
        expect(container).not.toHaveTextContent(/마녀주방 | 한식 | 서울시 강남구/);
      });
    });
  });
});
