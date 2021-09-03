import { render } from '@testing-library/react';

import NameInput from './NameInput';

describe('nameInput', () => {
  it('renders input element', () => {
    const { getByPlaceholderText } = render((
      <NameInput />
    ));

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
  });
});
