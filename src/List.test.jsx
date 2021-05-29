import { render } from '@testing-library/react';

import List from './List';

import restaurants from '../fixtures/restaurants';

describe('List', () => {
  it('has a list', () => {
    const { getAllByRole } = render(<List restaurants={restaurants} />);

    expect(getAllByRole('listitem')).toHaveLength(2);
  });

  it('has a restaurants information', () => {
    const { getAllByRole } = render(<List restaurants={restaurants} />);

    const listitem = getAllByRole('listitem');

    expect(listitem[0]).toHaveTextContent(
      `${restaurants[0].name} | ${restaurants[0].category} | ${restaurants[0].location}`,
    );
    expect(listitem[1]).toHaveTextContent(
      `${restaurants[1].name} | ${restaurants[1].category} | ${restaurants[1].location}`,
    );
  });
});
