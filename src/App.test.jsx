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
