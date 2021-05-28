import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('has a title', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Restaurants/)).not.toBeNull();
  });

  describe('List', () => {
    const restaurants = [
      {
        id: 1, name: '마녀주방', category: '한식', location: '서울시 강남구',
      },
      {
        id: 2, name: '시카고피자', category: '양식', location: '이태원동',
      },
    ];

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
});
