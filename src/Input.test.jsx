import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  const initialValue = {
    name: '',
    category: '',
    address: '',
  };

  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const renderInput = (restaurant) => render(
    <Input
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />,
  );

  it('placeholder가 "이름"인 input이 존재한다.', () => {
    const { getByPlaceholderText } = renderInput(initialValue);

    expect(getByPlaceholderText('이름')).not.toBeNull();
  });

  it('placeholder가 "분류"인 input이 존재한다.', () => {
    const { getByPlaceholderText } = renderInput(initialValue);

    expect(getByPlaceholderText('분류')).not.toBeNull();
  });

  it('placeholder가 "주소"인 input이 존재한다.', () => {
    const { getByPlaceholderText } = renderInput(initialValue);

    expect(getByPlaceholderText('주소')).not.toBeNull();
  });

  it('"등록" 텍스트를 가진 버튼이 존재한다.', () => {
    const { getByText } = renderInput(initialValue);

    expect(getByText('등록')).not.toBeNull();
  });

  it('"name" input에 값을 입력하면 onChange 이벤트가 실행된다.', () => {
    const { getByPlaceholderText } = renderInput(initialValue);

    const inputElement = getByPlaceholderText(/이름/);
    fireEvent.change(inputElement, { target: { value: '냠냠냠' } });

    expect(handleChange).toBeCalled();
  });

  it('"category" input에 값을 입력하면 onChange 이벤트가 실행된다.', () => {
    const { getByPlaceholderText } = renderInput(initialValue);

    const inputElement = getByPlaceholderText(/분류/);
    fireEvent.change(inputElement, { target: { value: '냠냠냠' } });

    expect(handleChange).toBeCalled();
  });

  it('"address" input에 값을 입력하면 onChange 이벤트가 실행된다.', () => {
    const { getByPlaceholderText } = renderInput(initialValue);

    const inputElement = getByPlaceholderText(/주소/);
    fireEvent.change(inputElement, { target: { value: '냠냠냠' } });

    expect(handleChange).toBeCalled();
  });

  it('"등록" 버튼을 누르면, onClick 이벤트가 실행된다.', () => {
    const { getByText } = renderInput(initialValue);

    const buttonElement = getByText('등록');
    fireEvent.click(buttonElement);

    expect(handleClick).toBeCalled();
  });
});
