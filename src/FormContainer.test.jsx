import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import FormContainer from './FormContainer';

jest.mock('react-redux');

const dispatch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  useDispatch.mockImplementation(() => dispatch);
});

describe('FormContainer', () => {
  const inputInfos = [
    { name: 'name', placeholder: '이름', value: '시카고피자' },
    { name: 'category', placeholder: '분류', value: '양식' },
    { name: 'address', placeholder: '주소', value: '이태원동' },
  ];

  function renderFormContainer() {
    return render((
      <FormContainer />
    ));
  }

  describe('change each input text', () => {
    useSelector.mockImplementation((selector) => selector({
      inputInfos,
    }));

    it('dispatches updateInputText action', () => {
      const { getAllByRole, getByDisplayValue } = renderFormContainer();

      inputInfos.forEach(({ name, value }) => {
        expect(getByDisplayValue(value)).not.toBeNull();
        expect(getByDisplayValue(value)).toHaveAttribute('name', name);
      });

      const textBoxes = getAllByRole('textbox');

      expect(textBoxes).not.toBeNull();

      textBoxes.forEach((textBox) => {
        fireEvent.change(textBox, { target: { value: '마녀주방' } });
      });

      expect(dispatch).toBeCalledTimes(3);
    });
  });

  describe('click add restaurant button', () => {
    it('dispatches addRestaurant action', () => {
      const { getByText } = renderFormContainer();

      fireEvent.click(getByText('등록'));

      expect(dispatch).toBeCalled();
    });
  });
});
