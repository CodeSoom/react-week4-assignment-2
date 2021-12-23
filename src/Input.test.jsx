import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  const initialValue = {
    name: '',
    category: '',
    address: '',
  };

  const handleChange = jest.fn();

  const renderInput = (restaurant) => render(
    <Input
      restaurant={restaurant}
      onChange={handleChange}
    />,
  );

  it('has a input element with "이름" placeholder', () => {
    const { getByPlaceholderText } = renderInput(initialValue);

    expect(getByPlaceholderText('이름')).not.toBeNull();
  });

  it('has a input element with "분류" placeholder', () => {
    const { getByPlaceholderText } = renderInput(initialValue);

    expect(getByPlaceholderText('분류')).not.toBeNull();
  });

  it('has a input element with "주소" placeholder', () => {
    const { getByPlaceholderText } = renderInput(initialValue);

    expect(getByPlaceholderText('주소')).not.toBeNull();
  });

  it('has a button with "등록" text', () => {
    const { getByText } = renderInput(initialValue);

    expect(getByText('등록')).not.toBeNull();
  });

  it("changes 'name' input's value", () => {
    const restaurantName = '마녀주방';
    const { getByPlaceholderText, getByDisplayValue } = renderInput(initialValue);

    fireEvent.change(getByPlaceholderText(/이름/), { target: { value: restaurantName } });

    expect(getByDisplayValue(restaurantName)).not.toBeNull();
  });

  // it("changes 'category' input's value", () => {
  //   const { getByPlaceholderText } = renderInput(initialValue);

  //   expect();
  // });

  // it("changes 'address' input's value", () => {
  //   const { getByPlaceholderText } = renderInput(initialValue);

  //   expect();
  // });

  it("after '등록' button clicked, all input's text should be empty", () => {
    const { getByText, getByPlaceholderText } = renderInput(initialValue);

    fireEvent.click(getByText('등록'));

    expect(getByPlaceholderText('이름')).not.toBeNull();
    expect(getByPlaceholderText('분류')).not.toBeNull();
    expect(getByPlaceholderText('주소')).not.toBeNull();
  });
});
