import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('renders three input box', () => {
    const { queryByPlaceholderText } = render((
      <Input />
    ));

    expect(queryByPlaceholderText(/이름/)).not.toBeNull();
    expect(queryByPlaceholderText(/분류/)).not.toBeNull();
    expect(queryByPlaceholderText(/주소/)).not.toBeNull();
  });

  it('renders button', () => {
    const { queryByText } = render((
      <Input />
    ));

    expect(queryByText(/등록/)).not.toBeNull();
  });
});
