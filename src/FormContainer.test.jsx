import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';
import FormContainer from './FormContainer';

jest.mock('react-redux');

describe('FormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();

    useSelector.mockImplementation((selector) => selector({
      inputs: {
        title: '',
        category: '',
        address: '',
      },
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders inputs', () => {
    const { queryByPlaceholderText } = render(<FormContainer />);

    expect(queryByPlaceholderText('이름')).not.toBeNull();
    expect(queryByPlaceholderText('분류')).not.toBeNull();
    expect(queryByPlaceholderText('주소')).not.toBeNull();
  });

  it('listens name input change event', () => {
    const { getByPlaceholderText } = render(<FormContainer />);

    fireEvent.change(getByPlaceholderText('이름'), {
      target: {
        name: 'name',
        value: '마녀주방',
      },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeInput',
      payload: {
        name: 'name',
        value: '마녀주방',
      },
    });
  });

  it('renders "등록" button', () => {
    const { queryByText } = render(<FormContainer />);

    expect(queryByText('등록')).not.toBeNull();
  });
});
