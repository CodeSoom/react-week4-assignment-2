import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();
  const handleAddRestaurant = jest.fn();

  context('updateTitle', () => {
    it('식당 이름이 입력되어 value가 바뀐다', () => {
      const { getAllByDisplayValue, getByPlaceholderText, getByText } = render((
        <Input
          name=""
          category=""
          address=""
          onChange={handleChange}
          onClick={handleAddRestaurant}
        />
      ));

      expect(getAllByDisplayValue('')).not.toBeNull();

      fireEvent.change(getByPlaceholderText('이름'), {
        target: { value: '마녀주방' },
      });
      expect(handleChange).toBeCalled();
      fireEvent.change(getByPlaceholderText('분류'), {
        target: { value: '한식' },
      });
      expect(handleChange).toBeCalled();
      fireEvent.change(getByPlaceholderText('주소'), {
        target: { value: '서울' },
      });
      expect(handleChange).toBeCalled();
      fireEvent.click(getByText(/등록/));
      expect(handleAddRestaurant).toBeCalled();
    });
  });
});
