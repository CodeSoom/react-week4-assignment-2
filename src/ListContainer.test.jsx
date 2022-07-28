import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  beforeEach(() => {
    render(<ListContainer />);
  });

  context('with restaurants', () => {
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
      restaurants,
    }));

    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    test('renders restaurant list', () => {
      expect(screen.getByText('마녀주방 | 한식 | 서울시 강남구')).not.toBeNull();
      expect(screen.getByText('시카고 피자 | 양식 | 이태원동')).not.toBeNull();
      expect(screen.getByText('키와미 | 일식 | 분당구 정자동')).not.toBeNull();
    });
  });
});
