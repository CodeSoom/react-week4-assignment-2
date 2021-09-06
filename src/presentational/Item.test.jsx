import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  it('renders restaurant', () => {
    const { container } = render((
      <Item title="맥도날드 | 양식 | 서울시 양천구" />
    ));

    expect(container).toHaveTextContent('맥도날드 | 양식 | 서울시 양천구');
  });
});
