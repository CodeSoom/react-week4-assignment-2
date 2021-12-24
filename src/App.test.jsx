import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

import { restaurants } from '../fixture/restautrants';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
    restautrant: {
      name: '',
      type: '',
      address: '',
    },
  }));

  it('render', () => {
    const {
      container, getByText, getByRole, getByPlaceholderText,
    } = render(
      <App />,
    );

    expect(getByText(/Restaurants/)).toBeInTheDocument();
    expect(getByPlaceholderText(/이름/)).toBeInTheDocument();
    expect(getByPlaceholderText(/분류/)).toBeInTheDocument();
    expect(getByPlaceholderText(/주소/)).toBeInTheDocument();
    expect(getByRole('button', { name: /추가/ })).toBeInTheDocument();

    restaurants.forEach((restaurant) => {
      expect(container).toHaveTextContent(restaurant.name);
      expect(container).toHaveTextContent(restaurant.type);
      expect(container).toHaveTextContent(restaurant.address);
    });
  });
});
