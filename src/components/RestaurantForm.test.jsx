import { fireEvent, render, screen } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

const renderRestaurantForm = ({
  initialValue = { name: '', category: '', location: '' },
  updateRestaurantForm,
  addNewRestaurant,
}) => {
  render(
    <RestaurantForm
      inputValues={initialValue}
      onUpdateRestaurantForm={updateRestaurantForm}
      onAddNewRestaurant={addNewRestaurant}
    />,
  );
};

describe('RestaurantForm', () => {
  it('레스토랑 등록 폼을 화면에 렌더한다.', () => {
    renderRestaurantForm({});

    expect(screen.getByRole('button', { name: '등록' })).toBeInTheDocument();
  });

  describe('onUpdateRestaurantForm', () => {
    it('input에 타이핑하면 액션이 실행되어야 한다.', () => {
      const updateRestaurantForm = jest.fn();
      renderRestaurantForm({ updateRestaurantForm });

      expect(screen.getByRole('textbox', { name: '이름' })).toHaveDisplayValue('');

      fireEvent.change(screen.getByRole('textbox', { name: '이름' }), { target: { value: '맛있는 밥상' } });

      expect(updateRestaurantForm).toBeCalledTimes(1);
    });
  });

  describe('addNewRestaurant', () => {
    it('작성된 폼 기반으로 새로운 레스토랑을 등록하는 액션이 실행되어야 한다.', () => {
      const addNewRestaurant = jest.fn();
      renderRestaurantForm({ addNewRestaurant });

      fireEvent.click(screen.getByRole('button', { name: '등록' }));

      expect(addNewRestaurant).toBeCalledTimes(1);
    });
  });
});
