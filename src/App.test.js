import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('"Restaurants" 타이틀이 보여야한다.', () => {
    const { queryByText } = render(<App />);

    expect(queryByText(/Restaurants/)).not.toBeNull();
  });

  // TODO : 테스트 수정 필요
  // it('RestaurantList 컴포넌트가 있다.', () => {
  //   const { queryByTestId } = render(<App />);
  //   expect(queryByTestId('restaurants-list')).not.toBeNull();
  // });

  // TODO : 테스트 수정 필요
  it('RestaurantNameInput 컴포넌트가 있다.', () => {
    const { queryByPlaceholderText } = render(<App />);

    expect(queryByPlaceholderText(/이름/)).not.toBeNull();
  });

  // TODO : 테스트 수정 필요
  it('RestaurantCategoryInput 컴포넌트가 있다.', () => {
    const { queryByPlaceholderText } = render(<App />);

    expect(queryByPlaceholderText(/분류/)).not.toBeNull();
  });

  // TODO : 테스트 수정 필요
  it('RestaurantAddressInput 컴포넌트가 있다.', () => {
    const { queryByPlaceholderText } = render(<App />);

    expect(queryByPlaceholderText(/주소/)).not.toBeNull();
  });
});
