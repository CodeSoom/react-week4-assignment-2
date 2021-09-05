import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  it('renders tasks', () => {
    const restaurants = [
      { name: '마녀주방', category: '분식', address: '서울시 강남구' },
      { name: '시카고피자', category: '양식', address: '이태원동' },
    ];

    const { getByText } = render((
      <List restaurants={restaurants} />
    ));

    expect(getByText(/마녀주방/)).not.toBeNull();
    expect(getByText(/시카고피자/)).not.toBeNull();
  });
});
