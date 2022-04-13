import { render } from '@testing-library/react';

import Page from './Page';

describe('Page 컴포넌트', () => {
  it('Page 컴포넌트를 렌더링할 수 있다. ', () => {
    const handleNameChange = jest.fn();
    const handleCategoryChange = jest.fn();
    const handleAddressChange = jest.fn();
    const handleRegisterRestaurant = jest.fn();

    const restaurants = [
      { name: '아웃백', category: '양식', address: '서울시 송파구' },
    ];

    const name = '';
    const category = '';
    const address = '';

    const { queryByTestId, queryByPlaceholderText } = render((
      <Page
        handleNameChange={handleNameChange}
        name={name}
        handleCategoryChange={handleCategoryChange}
        category={category}
        handleAddressChange={handleAddressChange}
        address={address}
        handleRegisterRestaurant={handleRegisterRestaurant}
        restaurants={restaurants}
      />
    ));

    expect(queryByTestId('restaurants-list')).not.toBeNull();
    expect(queryByPlaceholderText(/이름/)).not.toBeNull();
    expect(queryByPlaceholderText(/분류/)).not.toBeNull();
    expect(queryByPlaceholderText(/주소/)).not.toBeNull();
  });
});
