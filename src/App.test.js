import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('shows "Restaurants"', () => {
    const { queryByText } = render(<App />);

    expect(queryByText(/Restaurants/)).not.toBeNull();
  });

  it('has "이름","분류","주소" inputs', () => {
    const { queryByPlaceholderText } = render(<App />);

    expect(queryByPlaceholderText(/주소/)).not.toBeNull();
  });

  it('has "등록" button', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('등록')).not.toBeNull();
  });

  it('has restaurants list', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('restaurants-list')).not.toBeNull();
  });

  it('RestaurantNameInput 컴포넌트가 있다.', () => {
    const { queryByPlaceholderText } = render(<App />);

    expect(queryByPlaceholderText(/이름/)).not.toBeNull();
  });

  it('RestaurantCategoryInput 컴포넌트가 있다.', () => {
    const { queryByPlaceholderText } = render(<App />);

    expect(queryByPlaceholderText(/분류/)).not.toBeNull();
  });
});
