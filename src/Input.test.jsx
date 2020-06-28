import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  context('updateTitle', () => {
    it('식당 이름이 입력되어 value가 바뀐다', () => {
      const handleChange = jest.fn();
      const handleAddRestaurant = jest.fn();

      const { getAllByDisplayValue, getByPlaceholderText, getByText } = render((
        <Input
          title=""
          onChangeTitle={handleChange}
          onClickAddRestaurant={handleAddRestaurant}
        />
      ));

      expect(getAllByDisplayValue('')).not.toBeNull();

      fireEvent.change(getByPlaceholderText('이름'), {
        target: { value: '마녀주방' },
      });

      expect(handleChange).toBeCalled();

      fireEvent.click(getByText(/등록/));

      expect(handleAddRestaurant).toBeCalled();
    });
  });

  context('updateKind', () => {
    it('식당 이름이 입력되어 value가 바뀐다', () => {
      const handleChangeKind = jest.fn();
      const handleAddRestaurant = jest.fn();

      const { getAllByDisplayValue, getByPlaceholderText } = render((
        <Input
          kind=""
          onChangeKind={handleChangeKind}
          onClickAddRestaurant={handleAddRestaurant}
        />
      ));

      expect(getAllByDisplayValue('')).not.toBeNull();

      fireEvent.change(getByPlaceholderText('분류'), {
        target: { value: '한식' },
      });

      expect(handleChangeKind).toBeCalled();
    });
  });
});
