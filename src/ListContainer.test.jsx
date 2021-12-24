import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

test('ListContainer', () => {
  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/김가네/)).not.toBeNull();
});
