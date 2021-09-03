import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders title', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Restaurants');
  });

  it('renders name input field', () => {
    const { getByLabelText } = render(<App />);

    const restaurantName = getByLabelText('restaurantName');

    expect(restaurantName).not.toBeNull();
  });

  it('renders category input field', () => {
    const { getByLabelText } = render(<App />);

    const restaurantCategory = getByLabelText('restaurantCategory');

    expect(restaurantCategory).not.toBeNull();
  });

  it('renders address input field', () => {
    const { getByLabelText } = render(<App />);

    const restaurantAddress = getByLabelText('restaurantAddress');

    expect(restaurantAddress).not.toBeNull();
  });

  it('renders 등록 button', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('등록');
  });
});
