import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleChange = jest.fn();

  const renderInput = (placeholder = '', value = '') => render((
    <Input
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  ));

  it('Input이 변화되면 handelChange가 호출된다.', () => {
    const { container } = renderInput();

    expect(handleChange).not.toBeCalled();
    fireEvent.change(container, { target: { value: '마녀식당' } });
    expect(handleChange).toBeCalled();
  });

  context('value가 없을 때', () => {
    const parameter = {

    };

    it('주어진 placeholder가 출력된다.', () => {
      const { container } = renderInput('이름', '');

      expect(container).toHaveAttribute('placeholder', parameter.placeholder);
    });
  });

  context('value가 있을 때', () => {
    const parameter = {
      placeholder: '이름',
      value: '마녀주방',
    };

    it('주어진 value가 출력된다.', () => {
      const { container } = renderInput(parameter);

      expect(container).toHaveDisplayValue(parameter.value);
    });
  });
});
