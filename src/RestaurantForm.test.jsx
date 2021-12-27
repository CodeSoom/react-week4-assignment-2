import { render, fireEvent, screen } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

describe('RestaurantForm', () => {
  const handleFormSubmit = jest.fn();
  const handleInputChange = jest.fn();

  const restaurantInfo = {
    name: '',
    category: '',
    address: '',
  };

  it('등록 버튼 클릭시 handleFormSubmit 함수가 호출된다', () => {
    render(
      <RestaurantForm
        restaurantInfo={restaurantInfo}
        onSubmitForm={handleFormSubmit}
        onChangeInput={handleInputChange}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: '등록' }));

    expect(handleFormSubmit).toHaveBeenCalled();
  });
});
