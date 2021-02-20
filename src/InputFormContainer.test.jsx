import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import restaurants from '../fixture/restaurants';

import InputFormContainer from './InputFormContainer';

jest.mock('react-redux');

describe('InputFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => (dispatch));
    useSelector.mockImplementation((selector) => selector(restaurants));
  });

  it('이름입력창에 입력 생기면 state를 수정하는 함수가 실행된다.', () => {
    const { queryByPlaceholderText } = render(<InputFormContainer />);

    fireEvent.change(queryByPlaceholderText('이름'), {
      target: {
        value: '마녀 주방2',
      },
    });

    expect(dispatch).toBeCalled();
  });

  it('분류입력창에 입력이 생기면 state를 수정하는 함수가 실행된다.', () => {
    const { queryByPlaceholderText } = render(<InputFormContainer />);

    fireEvent.change(queryByPlaceholderText('분류'), {
      target: {
        value: '한식2',
      },
    });

    expect(dispatch).toBeCalled();
  });

  it('주소입력창에 입력이 생기면 state를 수정하는 함수가 실행된다.', () => {
    const { queryByPlaceholderText } = render(<InputFormContainer />);

    fireEvent.change(queryByPlaceholderText('주소'), {
      target: {
        value: '서울시 강남구2',
      },
    });

    expect(dispatch).toBeCalled();
  });

  it('등록 버튼을 누르면 state를 업데이트 하는 함수가 실행된다.', () => {
    const { queryByText } = render(<InputFormContainer />);

    fireEvent.click(queryByText('등록'));

    expect(dispatch).toBeCalled();
  });
});
