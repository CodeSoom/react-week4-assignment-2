import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  const renderApp = () => render(<App />);

  it('"Restaurants" 텍스트를 화면에 보여준다.', () => {
    const { getByText } = renderApp();

    expect(getByText('Restaurants')).not.toBeNull();
  });

  it('"이름", "분류", "장소" input에 값을 입력하면, 화면에 해당 값들이 나타난다.', () => {
    const { getByPlaceholderText, getByDisplayValue } = renderApp();
    const restaurant = {
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    };
    const { name, category, address } = restaurant;

    fireEvent.change(getByPlaceholderText(/이름/), { target: { value: name } });
    fireEvent.change(getByPlaceholderText(/분류/), { target: { value: category } });
    fireEvent.change(getByPlaceholderText(/주소/), { target: { value: address } });

    expect(getByDisplayValue(name)).not.toBeNull();
    expect(getByDisplayValue(category)).not.toBeNull();
    expect(getByDisplayValue(address)).not.toBeNull();
  });

  it('"등록" 버튼을 누르면, "이름", "분류", "장소" input의 값이 초기화된다.', () => {
    const { getByText, getByPlaceholderText, queryByDisplayValue } = renderApp();
    const restaurant = {
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    };
    const { name, category, address } = restaurant;

    fireEvent.change(getByPlaceholderText(/이름/), { target: { value: name } });
    fireEvent.change(getByPlaceholderText(/분류/), { target: { value: category } });
    fireEvent.change(getByPlaceholderText(/주소/), { target: { value: address } });

    fireEvent.click(getByText(/등록/));

    expect(queryByDisplayValue(name)).toBeNull();
    expect(queryByDisplayValue(category)).toBeNull();
    expect(queryByDisplayValue(address)).toBeNull();
  });
});
