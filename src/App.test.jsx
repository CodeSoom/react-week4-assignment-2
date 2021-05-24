import { render } from '@testing-library/react';
import App from './App';

it('renders header', () => {
  const { container } = render(<App />);
  expect(container).toHaveTextContent('Restaurants');
});

it('renders three inputbox', () => {
  const { getAllByRole } = render(<App />);
  expect(getAllByRole('textbox')).toHaveLength(3);
});

it('renders restaurants', () => {
  const { container } = render(<App />);
  expect(container).toHaveTextContent('마녀주방');
  expect(container).toHaveTextContent('한식');
  expect(container).toHaveTextContent('서울시 강남구');
});
