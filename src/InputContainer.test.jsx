import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('Shows value', () => {
    useSelector.mockImplementation((selector) => selector({
      listTitle: '카와미',
      listMenu: '한식',
      listAddress: '강남구 신사동',
      list: [],
    }));

    const { getByDisplayValue } = render((
      <InputContainer />
    ));

    expect(getByDisplayValue('카와미')).not.toBeNull();
    expect(getByDisplayValue('한식')).not.toBeNull();
    expect(getByDisplayValue('강남구 신사동')).not.toBeNull();
  });

  it('Calls dispatch', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      listTitle: '카와미',
      listMenu: '한식',
      listAddress: '강남구 신사동',
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
