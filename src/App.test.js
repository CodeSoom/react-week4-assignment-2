import { screen, render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { container } = render(<App />);

  expect(container).toHaveTextContent('Restaurants');

  screen.getByPlaceholderText('이름');
  screen.getByPlaceholderText('분류');
  screen.getByPlaceholderText('주소');
});
