import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ReserveContainer from './ReserveContainer';
import { useDispatch, useSelector } from '../__mocks__/react-redux';

describe('ReserveContainer', () => {
  const dispatch = jest.fn();

  const reservations = {
    name: '마녀주방',
    category: '한식',
    address: '서울시 강남구',
  };

  useDispatch.mockImplementation(() => (dispatch));
  useSelector.mockImplementation((selector) => selector(reservations));

  it('이름을 입력하면 업데이트 하는 함수를 실행합니다.', () => {
    const { getByPlaceholderText } = render(<ReserveContainer />);

    expect(dispatch).not.toBeCalled();

    fireEvent.change(getByPlaceholderText(/이름/), {
      target: {
        value: '마녀주방',
      },
    });

    expect(dispatch).toBeCalled();
  });
});
