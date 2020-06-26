import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('입력 창과 등록 버튼을 보여준다', () => {
    const information = {
      name: '',
      category: '',
      address: '',
    };

    useSelector.mockImplementation((selector) => selector({ information }));

    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    const { getByTestId, getByText } = render((
      <InputContainer />
    ));

    expect(getByTestId(/name/)).not.toBeNull();
    expect(getByTestId(/category/)).not.toBeNull();
    expect(getByTestId(/address/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();
  });
});
