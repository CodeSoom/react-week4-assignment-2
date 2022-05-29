import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import Restaurants from './Restaurants';

jest.mock('react-redux');

describe('Restaurants', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  context('restaurants 값이 있으면', () => {
    test('레스토랑 목록이 보인다.', () => {
      const { getByRole } = render(<Restaurants restaurants={[{
        id: 1,
        name: '마녀주방',
        type: '한식',
        address: '서울시 강남구',
      }]}
      />);

      expect(getByRole('list')).toHaveTextContent(/마녀주방 | 한식 | 서울시 강남구/);
    });
  });

  context('restaurant 값이 없으면', () => {
    test('레스토랑 목록이 나타나지 않는다.', () => {
      const { queryByRole } = render(<Restaurants restaurants={[]} />);

      expect(queryByRole('list')).not.toBeInTheDocument();
    });
  });
});
