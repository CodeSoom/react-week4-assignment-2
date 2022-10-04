import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('Shows value', () => {
    useSelector.mockImplementation((selector) => selector({
      title: '카와미',
      menu: '한식',
      address: '강남구 신사동',
      list: [],
    }));

    const { getByText } = render((
      <InputContainer />
    ));

    expect(getByText(/카와미/)).not.toBeNull();
    expect(getByText(/한식/)).not.toBeNull();
    expect(getByText(/강남구 신사동/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();
  });

  it('Calls dispatch', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      title: '카와미',
      menu: '한식',
      address: '강남구 신사동',
      list: [],
    }));

    const { getByText } = render((
      <InputContainer />
    ));

    expect(getByText(/등록/)).not.toBeNull();

    fireEvent.click(getByText(/등록/));

    expect(dispatch).toBeCalled();
  });
});
