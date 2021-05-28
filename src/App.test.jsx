import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('has a title', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Restaurants/)).not.toBeNull();
  });

  it('has a list', () => {
    const { getAllByRole, getByText } = render(<App />);

    expect(getAllByRole('listitem')).toHaveLength(2);
    expect(getByText(/마녀주방 | 한식 | 서울시 강남구/)).not.toBeNull();
    expect(getByText(/시카고피자| 양식 | 이태원동/)).not.toBeNull();
  });
});
