import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const onChange = jest.fn();

  function renderInput({ placeholder = '이름, ' }) {
    return render((
      <Input
        placeholder={placeholder}
        onChange={onChange}
      />
    ));
  }

  it('placeholder를 보여준다.', () => {
    const placeholder = '분류';

    const { getByPlaceholderText } = renderInput({ placeholder });

    expect(getByPlaceholderText(placeholder)).not.toBeNull();
  });

  it('값을 변경하면 함수가 호출된다.', () => {
    const { getByPlaceholderText } = renderInput({ onChange });

    const input = getByPlaceholderText('이름');

    fireEvent.change(input, {
      target: {
        value: '새마을식당',
      },
    });

    expect(onchange).toBeCalled();
  });
});
