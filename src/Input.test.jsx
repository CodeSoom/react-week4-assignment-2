import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  function renderInput({ placeholder }) {
    return render((
      <Input placeholder={placeholder} />
    ));
  }

  it('placeholder를 보여준다.', () => {
    const placeholder = '이름';

    const { getByPlaceholderText } = renderInput({ placeholder });

    expect(getByPlaceholderText(placeholder)).not.toBeNull();

  });
});
