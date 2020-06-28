import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  context('updateTitle', () => {
    it('식당 이름이 입력되어 value가 바뀐다', () => {
      const handleChange = jest.fn();

      const { getByDisplayValue, getByPlaceholderText } = render((
        <Input
          title=""
          onChangeTitle={handleChange}
        />
      ));

      expect(getByDisplayValue('')).not.toBeNull();

      fireEvent.change(getByPlaceholderText('이름'), {
        target: { value: '마녀주방' },
      });

      expect(handleChange).toBeCalled();
    });
  });
});
