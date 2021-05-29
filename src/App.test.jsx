import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

import restaurants from '../fixtures/restaurants';

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  it('has a title', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Restaurants/)).not.toBeNull();
  });

  describe('List', () => {
    it('has a list', () => {
      const { getAllByRole } = render(<App />);

      expect(getAllByRole('listitem')).toHaveLength(restaurants.length);
    });

    it('has a restaurant information', () => {
      const { getByText } = render(<App />);

      expect(getByText(
        `${restaurants[0].name} | ${restaurants[0].category} | ${restaurants[0].location}`,
      )).not.toBeNull();
    });
  });

  it('has three input and button', () => {
    const { getAllByRole, getByRole } = render(<App />);

    expect(getAllByRole('textbox')).toHaveLength(3);
    expect(getByRole('button', { name: '등록' })).not.toBeNull();
  });
});
