import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  it('renders value of props', () => {
    const { container } = render((
      <List value="ㅇㅇ | ㅇㅇ | ㅇㅇ" />
    ));

    expect(container).toHaveTextContent('ㅇㅇ | ㅇㅇ | ㅇㅇ');
  });
});
