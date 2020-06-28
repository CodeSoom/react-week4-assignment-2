import React from 'react';
import { useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    newId: 3,
    restaurantName: 'test_name',
    restaurantCategory: 'test_category',
    restaurantAddress: 'test_address',
    restaurants: [],
  }));

  context('when layout', () => {
    it('has title text', () => {
      const { container } = render((
        <App />
      ));

      expect(container).toHaveTextContent(/Restaurant/);
    });
  });

  context('when update', () => {
    it('name field', () => {
      const { getByPlaceholderText, container } = render((
        <App />
      ));

      fireEvent.change(getByPlaceholderText(/이름/), { target: { value: 'test_name' } });
      expect(container).toBeInTheDocument('test_name');
    });

    it('categoory field', () => {
      const { getByPlaceholderText, container } = render((
        <App />
      ));

      fireEvent.change(getByPlaceholderText(/분류/), { target: { value: 'test_category' } });
      expect(container).toBeInTheDocument('test_category');
    });

    it('address field', () => {
      const { getByPlaceholderText, container } = render((
        <App />
      ));

      fireEvent.change(getByPlaceholderText(/주소/), { target: { value: 'test_address' } });
      expect(container).toBeInTheDocument('test_address');
    });
  });
});
