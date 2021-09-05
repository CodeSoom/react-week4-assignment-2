import { render } from '@testing-library/react';
import restaurants from '../../__mocks__/restaurants';

import Item from './Item';

test('Item', () => {
  const { getByText } = render(<Item restaurant={restaurants[0]} />);

  expect(getByText('마녀주방 | 한식 | 서울시 강남구')).not.toBeUndefined();
});
