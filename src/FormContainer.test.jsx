import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import FormContainer from './FormContainer';

jest.mock('react-redux');

describe('FormContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('input을 보여준다', () => {
    useSelector.mockImplementation((selector) => selector({
      nameText: '성원각',
      categoryText: '중식',
      addressText: '서울시 동작구',
    }));

    const { getByText, getByPlaceholderText } = render((
      <FormContainer />
    ));

    expect(getByText(/등록/)).not.toBeNull();

    expect(getByPlaceholderText(/이름/)).toHaveDisplayValue(/성원각/);
    expect(getByPlaceholderText(/분류/)).toHaveDisplayValue(/중식/);
    expect(getByPlaceholderText(/주소/)).toHaveDisplayValue(/서울시 동작구/);
  });

  it('이벤트가 발생하면 각각의 state를 변경한다', () => {
    const { getByText, getByPlaceholderText } = render((
      <FormContainer />
    ));

    fireEvent.change(getByPlaceholderText(/이름/), {
      target: { value: '시골순두부' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'updateNameText',
      payload: {
        nameText: '시골순두부',
      },
    });

    fireEvent.change(getByPlaceholderText(/분류/), {
      target: { value: '한식' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'updateCategoryText',
      payload: {
        categoryText: '한식',
      },
    });

    fireEvent.change(getByPlaceholderText(/주소/), {
      target: { value: '인천시 계양구' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'updateAddressText',
      payload: {
        addressText: '인천시 계양구',
      },
    });

    fireEvent.click(getByText(/등록/));

    expect(dispatch).toBeCalledWith({
      type: 'addRestaurant',
    });
  });
});
