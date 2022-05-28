import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('Restaurants 라는 페이지 제목이 있다.', () => {
    const { getByRole } = render(<App />);

    expect(getByRole('heading')).toHaveTextContent('Restaurants');
  });

  test('레스토랑 이름, 분류, 주소를 입력할 수있는 인풋과 등록 버튼이 있다.', () => {
    const { getByRole, getAllByRole, getByPlaceholderText } = render(<App />);

    expect(getAllByRole('textbox')).toHaveLength(3);

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
    expect(getByPlaceholderText('분류')).toBeInTheDocument();
    expect(getByPlaceholderText('주소')).toBeInTheDocument();

    expect(getByRole('button', { name: '등록' })).toBeInTheDocument();
  });

  test('인풋에 값을 입력하고 등록 버튼을 누르면 목록에 값이 추가된다', () => {
    const { getByRole, getByPlaceholderText } = render(<App />);

    const nameInput = getByPlaceholderText('이름');
    const typeInput = getByPlaceholderText('분류');
    const addressInput = getByPlaceholderText('주소');

    fireEvent.change(nameInput, { target: { value: '마녀주방' } });
    fireEvent.change(typeInput, { target: { value: '한식' } });
    fireEvent.change(addressInput, { target: { value: '서울시 강남구' } });

    expect(nameInput).toHaveValue('마녀주방');
    expect(typeInput).toHaveValue('한식');
    expect(addressInput).toHaveValue('서울시 강남구');

    fireEvent.click(getByRole('button', { name: '등록' }));

    expect(getByRole('list')).toHaveTextContent('마녀주방 | 한식 | 서울시 강남구');
  });
});
