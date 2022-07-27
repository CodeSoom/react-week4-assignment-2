import { fireEvent, render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  context('without items', () => {
    it('renders subject', () => {
      expect(screen.getByText(/Restaurants/)).not.toBeNull();
    });

    it('renders form elements', () => {
      expect(screen.getAllByRole('textbox')).toHaveLength(3);
      expect(screen.getByRole('button')).not.toBeNull();
    });
  });

  context('with items', () => {
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
        id: 3,
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

    it('renders restaurant list', () => {
      expect(screen.getByText('키와미 | 일식 | 분당구 정자동')).not.toBeNull();
    });

    it('changes name input', () => {
      const name = screen.getAllByRole('textbox')[0];
      fireEvent.change(name, { target: { value: '최고의 가게' } });

      expect(dispatch).toBeCalledWith({
        type: 'changeName',
        payload: {
          name: '최고의 가게',
        },
      });
    });

    it('changes type input', () => {
      const type = screen.getAllByRole('textbox')[1];
      fireEvent.change(type, { target: { value: '최고의 타입' } });

      expect(dispatch).toBeCalledWith({
        type: 'changeType',
        payload: {
          type: '최고의 타입',
        },
      });
    });

    it('changes location input', () => {
      const location = screen.getAllByRole('textbox')[2];
      fireEvent.change(location, { target: { value: '최고의 위치' } });

      expect(dispatch).toBeCalledWith({
        type: 'changeLocation',
        payload: {
          location: '최고의 위치',
        },
      });
    });

    it('submits new restaurant', () => {
      fireEvent.click(screen.getByText('등록'));

      expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });
    });
  });
});
