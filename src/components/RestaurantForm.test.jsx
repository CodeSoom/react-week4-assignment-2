import { fireEvent, render, screen } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

describe('RestaurantForm', () => {
  it('레스토랑 등록 폼을 화면에 렌더한다.', () => {
    render(<RestaurantForm />);

    expect(screen.getByRole('button', { name: '등록' })).toBeInTheDocument();
  });

  describe('onUpdateRestaurantForm', () => {
    it('input에 타이핑하면 해당 값이 화면에 렌더되어야 한다.', () => {
      render(<RestaurantForm />);

      fireEvent.change(screen.getByRole('textbox', { name: 'name' }), { target: { value: '맛있는 밥상' } });

      expect(screen.getByRole('textbox', { name: 'name' })).toHaveDisplayValue('맛있는 밥상');
    });
  });
});
