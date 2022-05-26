import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders headline', () => {
    const { getByRole } = render(<App />);
    const element = getByRole('heading');
    expect(element).toHaveTextContent(/Restaurants/i);
  });

  it('renders a list of restaurants', () => {
    const { getByRole } = render(<App />);
    const element = getByRole('list');

    expect(element).toHaveTextContent(/마녀주방 | 한식 | 서울시 강남구/i);
    expect(element).toHaveTextContent(/시카고피자 | 양식 | 이태원동/i);
    expect(element).toHaveTextContent(/키와미 | 일식 | 분당구 정자동/i);
  });

  it('renders a TextBox', () => {
    const { getByRole, getByPlaceholderText } = render(<App />);

    const list = getByRole('list');
    const name = getByPlaceholderText('이름');
    const category = getByPlaceholderText('분류');
    const address = getByPlaceholderText('주소');

    fireEvent.change(name, { target: { value: '마녀주방' } });
    fireEvent.change(category, { target: { value: '한식' } });
    fireEvent.change(address, { target: { value: '서울시 강남구' } });

    expect(name).toHaveValue('마녀주방');
    expect(category).toHaveValue('한식');
    expect(address).toHaveValue('서울시 강남구');

    fireEvent.click(getByRole('button'));

    expect(list).toHaveTextContent(/마녀주방 | 한식 | 서울시 강남구/i);
  });
});
