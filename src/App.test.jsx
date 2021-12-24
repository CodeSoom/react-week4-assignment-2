import { render } from '@testing-library/react';

import App from './App';

// 목적: App컴포넌트를 렌더한다.
test('App', () => {
  const { getByText } = render((
    <App />
  ));

  expect(getByText(/김가네/)).not.toBeNull();
  expect(getByText(/등록/)).not.toBeNull();
});
