import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { restaurants } from '../fixtures/restaurant';
import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  test('레스토랑 목록을 보여준다.', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));
    const { getByText } = render(<RestaurantsContainer />);

    expect(getByText(/홍콩반점/)).not.toBeNull();
    expect(getByText(/뉴욕레스토랑/)).not.toBeNull();
  });
});
