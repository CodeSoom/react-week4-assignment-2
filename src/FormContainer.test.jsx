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
  const inputs = [
    { placeholder: '이름', value: '시카고피자' },
    { placeholder: '분류', value: '양식' },
    { placeholder: '주소', value: '이태원동' },
  ];

  function renderFormContainer() {
    return render((
      <FormContainer />
    ));
  }

  describe('change each input text', () => {
    useSelector.mockImplementation(() => ({
      inputs,
    }));

    it('dispatches updateInputText action', () => {
      const { getAllByRole, getByDisplayValue } = renderFormContainer();

      inputs.forEach(({ value }) => {
        expect(getByDisplayValue(value)).not.toBeNull();
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
      const { container, getByText } = renderFormContainer();

      expect(container).toHaveTextContent('등록');

      fireEvent.click(getByText('등록'));

      expect(dispatch).toBeCalled();
    });
  });
});
