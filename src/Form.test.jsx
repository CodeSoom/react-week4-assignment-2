import { render, fireEvent } from '@testing-library/react';

import Form from './Form';

describe('Form', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  function renderForm() {
    return render((<Form
      storeName="양키통닭"
      category="한식"
      address="서울시 문래동"
      onChange={handleChange}
      onClick={handleClick}
    />));
  }

  it('Form이 렌더링된다.', () => {
    const { getByText, getByPlaceholderText } = renderForm();

    expect(getByPlaceholderText('이름').value).toBe('양키통닭');
    expect(getByPlaceholderText('분류').value).toBe('한식');
    expect(getByPlaceholderText('주소').value).toBe('서울시 문래동');
    expect(getByText('등록')).not.toBeNull();
  });

  it('입력란에 레스토랑 정보를 입력하면 handleChange 함수가 호출된다..', () => {
    const { getByPlaceholderText } = renderForm();

    fireEvent.change(getByPlaceholderText('이름'), {
      target: {
        value: '김밥천국',
      },
    });

    expect(handleChange).toBeCalled();
  });

  it('등록 버튼을 클릭하면 handleClick 함수가 호출된다.', () => {
    const { getByText } = renderForm();

    fireEvent.click(getByText('등록'));

    expect(handleClick).toBeCalled();
  });
});
