import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

// 목적 : 레스토랑 fixture가 올바르게 들어갔는가?
test('ListContainer', () => {
  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/김가네/)).not.toBeNull();
});
