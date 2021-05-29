import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App컴포넌트 관련 테스트', () => {
  it('render로 App 화면을 그려지는 모습 확인 ', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        {
          id: 1,
          name: '마녀주방',
          category: '한식',
          address: '서울시 강남구',
        },
      ],
    }));

    const { getByText, getByPlaceholderText } = render(<App />);

    expect(getByText(/Restaurants/)).not.toBeNull();
    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByText(/마녀주방/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByText(/한식/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
    expect(getByText(/서울시 강남구/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();
  });
});
