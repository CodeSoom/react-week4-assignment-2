import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import { restaurants } from '../fixtures/restaurants';

jest.mock('react-redux');

describe('Restaurants', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  it('레스토랑 리스트를 화면에 렌더한다.', () => {
    render(<Restaurants restaurants={restaurants} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
