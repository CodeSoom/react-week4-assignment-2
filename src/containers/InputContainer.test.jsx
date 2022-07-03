import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

import { updateName, updateCategory, updateAddress } from '../store/actions';

jest.mock('react-redux');

describe('<InputContainer />', () => {
  given('restaurantName', () => '');
  given('category', () => '');
  given('address', () => '');

  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    name: given.restaurantName,
    category: given.category,
    address: given.address,
  }));

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  const renderInputContainer = () => render((<InputContainer />));

  it('레스토랑 이름을 입력할 수 있는 input이 보인다.', () => {
    const { getByPlaceholderText } = renderInputContainer();

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
  });

  context('입력된 이름이 있으면', () => {
    it('입력된 이름이 보인다.', () => {
      given('restaurantName', () => '마녀주방');

      const { getByPlaceholderText } = renderInputContainer();

      expect(getByPlaceholderText('이름')).toHaveDisplayValue(given.restaurantName);
    });
  });

  context('입력된 이름이 없으면', () => {
    it('input이 비어있다.', () => {
      given('restaurantName', () => '');

      const { getByPlaceholderText } = renderInputContainer();

      expect(getByPlaceholderText('이름')).toHaveDisplayValue('');
    });
  });

  describe('이름 입력', () => {
    it('이름을 업데이트 한다.', () => {
      const { getByPlaceholderText } = renderInputContainer();

      expect(dispatch).not.toBeCalled();

      const newName = '마녀주방';

      fireEvent.change(getByPlaceholderText('이름'), {
        target: {
          value: newName,
        },
      });

      expect(dispatch).toBeCalledWith(updateName(newName));
    });
  });

  it('레스토랑 카테고리를 입력할 수 있는 input이 보인다.', () => {
    const { getByPlaceholderText } = renderInputContainer();

    expect(getByPlaceholderText('분류')).toBeInTheDocument();
  });

  context('입력된 카테고리가 있으면', () => {
    it('입력된 값이 보인다.', () => {
      given('category', () => '한식');

      const { getByPlaceholderText } = renderInputContainer();

      expect(getByPlaceholderText('분류')).toHaveDisplayValue(given.category);
    });
  });

  context('입력된 카테고리가 없으면', () => {
    it('input이 비어있다.', () => {
      given('category', () => '');

      const { getByPlaceholderText } = renderInputContainer();

      expect(getByPlaceholderText('분류')).toHaveDisplayValue('');
    });
  });

  describe('카테고리 입력', () => {
    it('카테고리를 업데이트 한다.', () => {
      const { getByPlaceholderText } = renderInputContainer();

      expect(dispatch).not.toBeCalled();

      const newCategory = '한식';

      fireEvent.change(getByPlaceholderText('분류'), {
        target: {
          value: newCategory,
        },
      });

      expect(dispatch).toBeCalledWith(updateCategory(newCategory));
    });
  });

  it('레스토랑 주소를 입력할 수 있는 input이 보인다.', () => {
    const { getByPlaceholderText } = renderInputContainer();

    expect(getByPlaceholderText('주소')).toBeInTheDocument();
  });

  context('입력된 주소가 있으면', () => {
    it('입력된 값이 보인다.', () => {
      given('address', () => '서울시 강남구');

      const { getByPlaceholderText } = renderInputContainer();

      expect(getByPlaceholderText('주소')).toHaveDisplayValue(given.address);
    });
  });

  context('입력된 주소가 없으면', () => {
    it('input이 비어있다.', () => {
      given('address', () => '');

      const { getByPlaceholderText } = renderInputContainer();

      expect(getByPlaceholderText('주소')).toHaveDisplayValue('');
    });
  });

  describe('주소 입력', () => {
    it('주소를 업데이트 한다.', () => {
      const { getByPlaceholderText } = renderInputContainer();

      expect(dispatch).not.toBeCalled();

      const newAddress = '서울시 강남구';

      fireEvent.change(getByPlaceholderText('주소'), {
        target: {
          value: newAddress,
        },
      });

      expect(dispatch).toBeCalledWith(updateAddress(newAddress));
    });
  });

  it('등록 버튼이 보인다.', () => {
    const { getByText } = renderInputContainer();

    expect(getByText('등록')).toBeInTheDocument();
  });
});
