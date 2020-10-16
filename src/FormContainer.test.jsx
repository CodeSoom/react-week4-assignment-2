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
      const { getAllByRole } = renderFormContainer();
      const textBoxes = getAllByRole('textbox');

      textBoxes.forEach((textBox, index) => {
        expect(textBox).toHaveAttribute('name', inputInfos[index].name);

        fireEvent.change(textBox, { target: { value: '마녀주방' } });
      });

      expect(dispatch).toBeCalledTimes(inputInfos.length);
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
