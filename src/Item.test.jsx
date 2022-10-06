import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  const restaurants = {
    id: 1, name: '마녀주방', type: '한식', address: '서울시 강남구',
  };

  it('renders text', () => {
    const { getByText } = render((
      <Item restaurants={restaurants} />
    ));

    expect(getByText(/마녀주방/)).not.toBeNull();
    expect(getByText(/한식/)).not.toBeNull();
    expect(getByText(/서울시 강남구/)).not.toBeNull();
  });
});
