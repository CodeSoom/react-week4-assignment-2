import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('renders restaurants', () => {
    const { getByPlaceholderText, getByText } = render((
      <Input />
    ));

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
    expect(getByPlaceholderText('분류')).toBeInTheDocument();
    expect(getByPlaceholderText('주소')).toBeInTheDocument();

    expect(getByText('등록')).toBeInTheDocument();
  });
});
