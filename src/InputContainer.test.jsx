import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

import {
  updateRestaurant, addRestaurant,
} from './actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    title: '',
  }));

  function renderInputContainer() {
    const { getByPlaceholderText } = render((
      <InputContainer />
    ));
    return {
      inputTitle: getByPlaceholderText(/이름/),
      inputKind: getByPlaceholderText(/분류/),
      inputAddress: getByPlaceholderText(/주소/),
    };
  }

  function getTarget(name, value) {
    return {
      name, value,
    };
  }

  describe('updateRestaurant', () => {
    context('이름을 입력하면', () => {
      it('이름이 바뀌어 반환된다.', () => {
        const { inputTitle } = renderInputContainer();
        fireEvent.change(inputTitle, {
          target: {
            value: '마녀들의 주방',
          },
        });
        const target = getTarget('title', '마녀들의 주방');
        expect(dispatch).toBeCalledWith(updateRestaurant(target));
      });
    });

    context('분류를 입력하면', () => {
      it('분류가 바뀌어 반환된다.', () => {
        const { inputKind } = renderInputContainer();
        fireEvent.change(inputKind, {
          target: {
            value: '한식',
          },
        });
        const target = getTarget('kind', '한식');
        expect(dispatch).toBeCalledWith(updateRestaurant(target));
      });
    });

    context('주소를 입력하면', () => {
      it('주소가 바뀌어 반환된다.', () => {
        const { inputAddress } = renderInputContainer();
        fireEvent.change(inputAddress, {
          target: {
            value: '서울시 강남구',
          },
        });
        const target = getTarget('address', '서울시 강남구');
        expect(dispatch).toBeCalledWith(updateRestaurant(target));
      });
    });
  });

  describe('addRestaurant', () => {
    context('레스토랑을 등록하면', () => {
      it('목록에 등록된다.', () => {
        useSelector.mockImplementation((selector) => selector({
          title: '시카고 피자',
          restaurants: [],
        }));

        const { getByText, getByDisplayValue } = render((
          <InputContainer />
        ));

        expect(getByText(/등록/)).not.toBeNull();
        expect(getByDisplayValue(/시카고 피자/)).not.toBeNull();

        fireEvent.click(getByText(/등록/));
        expect(dispatch).toBeCalledWith(addRestaurant());
      });
    });
  });
});
