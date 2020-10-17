import React from 'react';

import { useSelector } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  function renderInpuContainer() {
    return render((
      <InputContainer />
    ));
  }

  describe('first loaded', () => {
    it('show aform for add restaurant\'info', () => {
      const { getByPlaceholderText, getByText } = renderInpuContainer();

      expect(getByPlaceholderText(/이름/)).not.toBeNull();
      expect(getByPlaceholderText(/분류/)).not.toBeNull();
      expect(getByPlaceholderText(/주소/)).not.toBeNull();
      expect(getByText(/등록/)).not.toBeNull();
    });
  });

  describe('add restaurant', () => {
    context('with existed all input value', () => {
      const { getByText } = renderInpuContainer();

      fireEvent.click(getByText(/등록/));

      expect(getByText(dispatch)).toBeCalledWith({
        type: 'add restaurant',
      });
    });
  });
});
