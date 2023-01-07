import { render, screen } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

describe('RestaurantForm', () => {
  it('레스토랑 등록 폼을 화면에 렌더한다.', () => {
    render(<RestaurantForm />);

    expect(screen.getByRole('button', { name: '등록' })).toBeInTheDocument();
  });
});
