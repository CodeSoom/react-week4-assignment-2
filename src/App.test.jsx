import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  context('when there are restaurants', () => {
    it('should display restaurants', () => {
      const restaurant = {
        id: 101, name: 'Busan Rice', type: 'Korean', address: 'Busan Daeyeon',
      };
      useSelector.mockImplementation((selector) => selector({
        restaurants: [restaurant],
        restaurant,
      }));

      const { getByText } = render((
        <App />
      ));

      expect(getByText('Restaurants')).not.toBeNull();

      // expect(getByText(/Seoul Iteawon/)).not.toBeNull();
    });
  });
});
