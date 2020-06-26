import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  it('초기화면이 나타난다.', () => {
    const { container } = render((
      <Item />
    ));

    expect(container).toHaveTextContent('');
  });

  context('이름, 분류, 주소의 값이 주어진다면', () => {
    it('화면에 이름, 분류, 주소가 나타난다.', () => {
      const { getByDisplayValue } = render((
        <Item
          name="마녀주방"
          category="한식"
          address="강남구"
        />
      ));

      expect(getByDisplayValue(/마녀주방/)).not.toBeNull();
    });
  });
});
