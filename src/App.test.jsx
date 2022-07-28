import { fireEvent, render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  context('restaurants = []', () => {
    it('renders subject', () => {
      expect(screen.getByText(/Restaurants/)).not.toBeNull();
    });

    it('renders form elements', () => {
      expect(screen.getAllByRole('textbox')).toHaveLength(3);
      expect(screen.getByRole('button')).not.toBeNull();
    });
  });

  context('with restaurants', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurantName: '신규가게',
      restaurantType: '중식',
      restaurantLocation: '명동',
    }));

    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    it('listens to change event on changeName', () => {
      const name = screen.getAllByRole('textbox')[0];
      fireEvent.change(name, { target: { value: '최고의 가게' } });

      expect(dispatch).toBeCalledWith({
        type: 'changeName',
        payload: {
          name: '최고의 가게',
        },
      });
    });

    it('listens to change event on changeType', () => {
      const type = screen.getAllByRole('textbox')[1];
      fireEvent.change(type, { target: { value: '최고의 타입' } });

      expect(dispatch).toBeCalledWith({
        type: 'changeType',
        payload: {
          type: '최고의 타입',
        },
      });
    });

    it('listens to change event on changeLocation', () => {
      const location = screen.getAllByRole('textbox')[2];
      fireEvent.change(location, { target: { value: '최고의 위치' } });

      expect(dispatch).toBeCalledWith({
        type: 'changeLocation',
        payload: {
          location: '최고의 위치',
        },
      });
    });

    it('listens to click event on addRestaurant', () => {
      fireEvent.click(screen.getByText('등록'));

      expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });
    });
  });
});
