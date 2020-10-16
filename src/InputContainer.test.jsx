import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    infoValue: {
      nameTitle: '밥',
      classification: '한식',
      location: '서울',
    },
  }));

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => jest.clearAllMocks());

  context('when change restaurant information in inputs', () => {
    it('calls update dispatch', () => {
      const { getByDisplayValue } = render(<InputContainer />);

      fireEvent.change(getByDisplayValue(/밥/), { target: { value: '피자' } });

      expect(dispatch).toBeCalledWith({
        type: 'updateInformation',
        payload: {
          name: 'nameTitle',
          value: '피자',
        },
      });
    });
  });

  context('when click 등록 button', () => {
    it('calls add dispatch', () => {
      const { getByText } = render(<InputContainer />);

      fireEvent.click(getByText('등록'));

      expect(dispatch).toBeCalledWith({
        type: 'addInformation',
        payload: {
          nameTitle: '밥',
          classification: '한식',
          location: '서울',
        },
      });
    });

    it('calls initializeInformation dispatch', () => {
      const { getByText } = render(<InputContainer />);

      fireEvent.click(getByText('등록'));

      expect(dispatch).toBeCalledWith({ type: 'initializeInformation' });
    });
  });
});
