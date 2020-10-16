import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import fixture from '../__fixtuers__/fixture';

import FormContainer from './FormContainer';

jest.mock('react-redux');

const dispatch = jest.fn();

describe('FormContainer', () => {
  const { inputInfos } = fixture;

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      inputInfos,
    }));
  });

  function renderFormContainer() {
    return render((
      <FormContainer />
    ));
  }

  describe('change each input text', () => {
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
