import { render, screen } from '@testing-library/react';

import { restaurants } from '../fixtures/restaurants';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  it('레스토랑 리스트를 화면에 렌더한다.', () => {
    render(<Restaurants restaurants={restaurants} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
