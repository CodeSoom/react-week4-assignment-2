import { render } from '@testing-library/react';

import Item from './Item';

test('Item', () => {
  const restaurant = {
    id: 1,
    information: {
      name: '도미노피자',
      category: '양식',
      address: '강남구',
    },
  };

  const { container } = render((
    <Item restaurant={restaurant} />
  ));

  expect(container).toHaveTextContent('도미노피자 | 양식 | 강남구');
});
