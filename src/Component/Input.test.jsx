import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('초기화면이 나타난다.', () => {
    const { getByText, getByTestId } = render((
      <Input />
    ));

    expect(getByTestId('name')).not.toBeNull();
    expect(getByTestId('category')).not.toBeNull();
    expect(getByTestId('address')).not.toBeNull();
    expect(getByText('등록')).not.toBeNull();
  });
});
