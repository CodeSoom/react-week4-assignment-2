import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');
describe('InputContainer', () => {

  it ('클릭', () => {
    const dispatch = jest.fn(e => e.preventDefault);

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      input: {
        name: '하하',
        category: '호호',
        address: '히히',
      }
    }));

    const {getByText} = render(<InputContainer />);

    expect(dispatch).not.toBeCalled();

    fireEvent.click(getByText(/등록/));

    expect(dispatch).toBeCalled();
  });
});