import { render } from '@testing-library/react';

import Restaurants from './Restaurants';
import { restaurants } from '../fixtures/restaurant';

jest.mock('react-redux');

describe('Restaurants', () => {
  test('레스토랑 목록을 보여준다.', () => {
    const { getByText } = render(<Restaurants restaurants={restaurants} />);

    expect(getByText(/홍콩반점/)).not.toBeNull();
    expect(getByText(/뉴욕레스토랑/)).not.toBeNull();
  });
});
