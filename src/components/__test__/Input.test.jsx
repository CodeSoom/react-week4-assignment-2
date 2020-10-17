import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Input from '../Input';

describe('Input', () => {
  const placeholder = '플레이스홀더';
  const handleChange = jest.fn();

  const renderInput = (value) => render((
    <Input
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  ));

  context('without value', () => {
    it('placeholder 확인', () => {
      renderInput('');

      const { getByPlaceholderText } = screen;

      expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
    });
  });

  context('with value', () => {
    const value = 'some';

    it('value 확인', () => {
      renderInput(value);

      const { getByDisplayValue } = screen;

      expect(getByDisplayValue(value)).toBeInTheDocument();
    });
  });

  it('onChange 테스트', () => {
    renderInput('');

    const { getByRole } = screen;

    expect(handleChange).not.toBeCalled();

    fireEvent.change(getByRole('textbox'), { target: { value: 'a' } });

    expect(handleChange).toBeCalled();
  });
});
