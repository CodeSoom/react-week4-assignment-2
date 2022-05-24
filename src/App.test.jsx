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

  it('renders name input box', () => {
    const handleChange = jest.fn();

    const { getByPlaceholderText } = render(<App />);
    const element = getByPlaceholderText('이름');

    fireEvent.change(element, { target: { value: '마녀주방' } });

    expect(handleChange).toBeCalled();
    expect(handleChange).toHaveValue('마녀주방');
  });

  it('renders category input box', () => {
    const handleChange = jest.fn();

    const { getByPlaceholderText } = render(<App />);
    const element = getByPlaceholderText('분류');

    fireEvent.change(element, { target: { value: '한식' } });

    expect(handleChange).toBeCalled();
    expect(handleChange).toHaveValue('한식');
  });

  it('renders address input box', () => {
    const handleChange = jest.fn();

    const { getByPlaceholderText } = render(<App />);
    const element = getByPlaceholderText('주소');

    fireEvent.change(element, { target: { value: '서울시 강남구' } });

    expect(handleChange).toBeCalled();
    expect(handleChange).toHaveValue('서울시 강남구');
  });

  it('renders a button', () => {
    const { getByRole } = render(<App />);
    const element = getByRole('button');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/등록/i);
  });
});
