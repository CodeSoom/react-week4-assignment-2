import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('초기 화면에는 이름|분류|주소 입력란, 등록 버튼이 있어야 한다.', () => {
    const { queryByText, queryByPlaceholderText } = render(<App />);

    expect(queryByText(/Restaurants/)).not.toBeNull();
    expect(queryByPlaceholderText(/이름/)).not.toBeNull();
    expect(queryByPlaceholderText(/분류/)).not.toBeNull();
    expect(queryByPlaceholderText(/주소/)).not.toBeNull();
  });
});
