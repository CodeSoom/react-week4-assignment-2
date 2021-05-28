import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('has a title', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Restaurants/)).not.toBeNull();
  });

  describe('List', () => {
    it('has a list', () => {
      const { getAllByRole } = render(<App />);

      expect(getAllByRole('listitem')).toHaveLength(2);
    });

    it('has a restaurant information', () => {
      const restaurants = [
        { name: '마녀주방', category: '한식', location: '서울시 강남구' },
        { name: '시카고피자', category: '양식', location: '이태원동' },
      ];

      const { getAllByRole } = render(<App />);

      const listitem = getAllByRole('listitem');

      expect(listitem[0]).toHaveTextContent(
        `${restaurants[0].name} | ${restaurants[0].category} | ${restaurants[0].location}`,
      );
      expect(listitem[1]).toHaveTextContent(
        `${restaurants[1].name} | ${restaurants[1].category} | ${restaurants[1].location}`,
      );
    });
  });
});
