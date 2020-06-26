import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  it('화면에 이름, 분류, 주소가 나타난다.', () => {
    const information = {
      name: '마녀주방',
      category: '한식',
      address: '강남',
    };

    const { getByText } = render((
      <Item
        information={information}
      />
    ));

    expect(getByText(/마녀주방/)).not.toBeNull();
    expect(getByText(/한식/)).not.toBeNull();
    expect(getByText(/강남/)).not.toBeNull();
  });
});
