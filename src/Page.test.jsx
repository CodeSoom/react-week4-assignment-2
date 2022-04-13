import { render } from '@testing-library/react';

import Page from './Page';

describe('Page 컴포넌트', () => {
  it('Page 컴포넌트를 렌더링할 수 있다. ', () => {
    const { queryByTestId, queryByPlaceholderText } = render(<Page />);

    expect(queryByTestId('restaurants-list')).not.toBeNull();
    expect(queryByPlaceholderText(/이름/)).not.toBeNull();
    expect(queryByPlaceholderText(/분류/)).not.toBeNull();
    expect(queryByPlaceholderText(/주소/)).not.toBeNull();
  });
});
