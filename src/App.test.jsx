import { fireEvent, render, screen } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  context('initial rendering with no items', () => {
    beforeEach(() => {
      render(<App />);
    });
    it('renders subject', () => {
      expect(screen.getByText(/Restaurants/)).not.toBeNull();
    });
    it('renders form elements', () => {
      expect(screen.getAllByRole('textbox')).toHaveLength(3);
      expect(screen.getByRole('button')).not.toBeNull();
    });
  });
  context('rendering with items', () => {
    const restaurants = [
      {
        id: 1,
        name: '마녀주방',
        type: '한식',
        location: '서울시 강남구',
      },
      {
        id: 2,
        name: '시카고 피자',
        type: '양식',
        location: '이태원동',
      },
      {
        id: 2,
        name: '키와미',
        type: '일식',
        location: '분당구 정자동',
      },
    ];

    useSelector.mockImplementation((selector) => selector({
      restaurantName: '신규가게',
      restaurantType: '중식',
      restaurantLocation: '명동',
      restaurants,
    }));

    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    beforeEach(() => {
      render(<App />);
    });

    it('renders restaurant list', () => {
      expect(screen.getByText('키와미 | 일식 | 분당구 정자동')).not.toBeNull();
    });
  });
});
