import { render } from '@testing-library/react';
import List from './List';

describe('List', () => {
  it('it renders "List" text', () => {
    const { getByText } = render(<List />);

    expect(getByText('List')).not.toBeNull();
  });
});
