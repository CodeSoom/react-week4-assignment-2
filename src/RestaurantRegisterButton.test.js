import { render, fireEvent } from '@testing-library/react';
import RestaurantRegisterButton from './RestaurantRegisterButton';

describe('RestaurantRegisterButton 컴포넌트', () => {
  it('등록 버튼을 가지고 있다.', () => {
    const handleRegisterRestaurant = jest.fn();
    const { queryByText } = render((
      <RestaurantRegisterButton
        onClick={handleRegisterRestaurant}
      />
    ));

    const button = queryByText(/등록/);
    expect(button).not.toBeNull();

    fireEvent.click(button);
    expect(handleRegisterRestaurant).toBeCalled();
  });
});
