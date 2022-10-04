import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  it('shows reservation', () => {
    const item = {
      id: 1,
      name: '백암',
      category: '순댓국',
      address: '여의도',
    };

    const { getByText } = render((
      <Item item={item} />
    ));

    expect(getByText('백암|순댓국|여의도')).not.toBeNull();
  });
});
