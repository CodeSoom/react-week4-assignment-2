import { render } from '@testing-library/react';

import NameInput from './NameInput';

describe('nameInput', () => {
  it('renders input elements', () => {
    const { getByPlaceholderText } = render((
      <NameInput />
    ));

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
  });
});
