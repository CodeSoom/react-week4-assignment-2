import { render, fireEvent } from '@testing-library/react';

import RestaurantList from './RestaurantList';
import Page from './Page';

describe('RestaurantList 컴포넌트', () => {
  it('testId가 restaurants-list 인 li 요소를 가지고 있다.', () => {
    const { queryByTestId } = render((<RestaurantList />));

    expect(queryByTestId('restaurants-list')).not.toBeNull();
  });

  it('레스토랑 정보가 보여야 한다.', () => {
    const handleNameChange = jest.fn();
    const handleCategoryChange = jest.fn();
    const handleAddressChange = jest.fn();
    const handleRegisterRestaurant = jest.fn();

    const restaurantList = [
      { name: '아웃백', category: '양식', address: '서울시 송파구' },
    ];

    const name = '';
    const category = '';
    const address = '';

    const { container } = render((
      <Page
        handleNameChange={handleNameChange}
        name={name}
        handleCategoryChange={handleCategoryChange}
        category={category}
        handleAddressChange={handleAddressChange}
        address={address}
        handleRegisterRestaurant={handleRegisterRestaurant}
        restaurantList={restaurantList}
      />
    ));

    expect(container).toHaveTextContent('아웃백 | 양식 | 서울시 송파구');
  });
});
