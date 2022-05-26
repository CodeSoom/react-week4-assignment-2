import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const renderApp = () => render(<App />);

  it("'Restaurants'과 input을 렌더한다", () => {
    const { container, getByPlaceholderText } = renderApp();

    expect(container).toHaveTextContent('Restaurants');
    expect(getByPlaceholderText('이름').getAttribute('')).toBe('');
    expect(getByPlaceholderText('분류').getAttribute('')).toBe('');
    expect(getByPlaceholderText('주소').getAttribute('')).toBe('');
  });

  it('이름, 분류, 주소 placeholder에 원하는 값을 입력한다', () => {
    const { getByPlaceholderText } = renderApp();

    expect(getByPlaceholderText('이름')).toBe('마녀주방');
    expect(getByPlaceholderText('분류')).toBe('한식');
    expect(getByPlaceholderText('주소')).toBe('서울시 강남구');
  });

  it('이름, 분류, 주소를 입력하고 등록 버튼을 누르면 input은 초기화하고 목록을 추가한다', () => {
    const { getByPlaceholderText } = renderApp();
    // when : Button Clicks

    // then
    expect(getByPlaceholderText('이름')).toBe('');
    expect(getByPlaceholderText('분류')).toBe('');
    expect(getByPlaceholderText('주소')).toBe('');
  });
});
