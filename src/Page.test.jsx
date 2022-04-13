import { render } from '@testing-library/react';

describe('Page', () => {
  it('Page 컴포넌트를 렌더링할 수 있다.', () => {
    const { container } = render(<Page />);
  });
});
