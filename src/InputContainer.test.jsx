import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');
describe('InputContainer', () => {
  context('when add restaurants', () => {
    it('fire form event', () => {
      const dispatch = jest.fn((e) => e.preventDefault);

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        input: {
          name: '하하',
          category: '호호',
          address: '히히',
        },
      }));

      const { getByTestId } = render(<InputContainer />);

      expect(dispatch).not.toBeCalled();

      fireEvent.submit(getByTestId('form'));

      expect(dispatch).toHaveBeenCalled();
    });
  });

  context('when \'name\'input change', () => {
    it('fire change event', () => {
      const dispatch = jest.fn((e) => e.preventDefault);

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        input: {
          name: '',
        },
      }));

      const { getByPlaceholderText } = render(<InputContainer />);

      expect(dispatch).not.toBeCalled();

      fireEvent.change(getByPlaceholderText(/이름/), {
        target: {
          value: '바보',
        },
      });

      expect(dispatch).toBeCalled();
    });
  });
});
