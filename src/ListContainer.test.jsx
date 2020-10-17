import React from 'react';

import { render } from '@testing-library/react';

describe('ListContainer', () => {
  function restaurantList() {
    return render((
      <ListContainer />
    ));
  }

  describe('first loaded', () => {
    context('with restaurants', () => {
      it('show restaurant', () => {
        const { getByText } = restaurantList();
        expect(getByText(/마녀주방 | 한식 | 서울시 강남구/)).not.toBeNull();
      });
    });

    context('without restaurants', () => {
      it("doesn't work", () => {
        const { getByText } = restaurantList();
        expect(getByText(/마녀주방 | 한식 | 서울시 강남구/)).toBeNull();
      });
    });
  });
});
