import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurant from '../fixtures/restaurant';
import restaurants from '../fixtures/restaurants';

import App from './App';

describe('App', () => {
  useSelector.mockImplementation((state) => state({
    restaurant,
    restaurants,
  }));

  const renderApp = () => render(<App />);

  it('renders a heading', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('Restaurants');
  });

  it('renders restaurants', () => {
    const { container } = renderApp();

    restaurants.forEach(({ name, type, address }) => {
      expect(container).toHaveTextContent(name);
      expect(container).toHaveTextContent(type);
      expect(container).toHaveTextContent(address);
    });
  });

  it('renders restaurant', () => {
    const { getByPlaceholderText } = renderApp();

    expect(getByPlaceholderText('이름')).toHaveValue(restaurant.name);
    expect(getByPlaceholderText('분류')).toHaveValue(restaurant.type);
    expect(getByPlaceholderText('주소')).toHaveValue(restaurant.address);
  });
});
