import { fireEvent, render, screen } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

const renderRestaurantForm = () => {
  const initialValue = { name: '' };
  const updateRestaurantForm = jest.fn();

  render(
    <RestaurantForm
      inputValues={initialValue}
      onUpdateRestaurantForm={updateRestaurantForm}
    />,
  );
};

describe('RestaurantForm', () => {
  it('레스토랑 등록 폼을 화면에 렌더한다.', () => {
    renderRestaurantForm();

    expect(screen.getByRole('button', { name: '등록' })).toBeInTheDocument();
  });

  describe('onUpdateRestaurantForm', () => {
    it('input에 타이핑하면 액션이 실행되어야 한다.', () => {
      const initialValue = { name: '' };
      const updateRestaurantForm = jest.fn();

      render(
        <RestaurantForm
          inputValues={initialValue}
          onUpdateRestaurantForm={updateRestaurantForm}
        />,
      );

      expect(screen.getByRole('textbox', { name: '이름' })).toHaveDisplayValue('');

      fireEvent.change(screen.getByRole('textbox', { name: '이름' }), { target: { value: '맛있는 밥상' } });

      expect(updateRestaurantForm).toBeCalledTimes(1);
    });
  });
});
