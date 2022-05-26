import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
  addRestaurant,
} from '../actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) =>
    selector({
      restaurantName: '',
      restaurantCategory: '',
      restaurantAddress: '',
    })
  );

  const renderInputContainer = () => render(<InputContainer />);

  describe('Restaurant Name Input', () => {
    it('원하는 값을 입력하고, updateRestaurantName을 disptach한다.', () => {
      const { getByPlaceholderText } = renderInputContainer();

      fireEvent.change(getByPlaceholderText('이름'), {
        target: { value: '마녀식당' },
      });

      expect(dispatch).toBeCalledWith(updateRestaurantName('마녀식당'));
    });
  });

  describe('Restaurant Category Input', () => {
    it('원하는 값을 입력하고, updateRestaurantCategory을 disptach한다.', () => {
      const { getByPlaceholderText } = renderInputContainer();

      fireEvent.change(getByPlaceholderText('분류'), {
        target: { value: '한식' },
      });

      expect(dispatch).toBeCalledWith(updateRestaurantCategory('한식'));
    });
  });

  describe('Restaurant Address Input', () => {
    it('원하는 값을 입력하고, updateRestaurantAddress을 disptach한다.', () => {
      const { getByPlaceholderText } = renderInputContainer();

      fireEvent.change(getByPlaceholderText('주소'), {
        target: { value: '서울시 강남구' },
      });

      expect(dispatch).toBeCalledWith(updateRestaurantAddress('서울시 강남구'));
    });
  });

  it('등록 버튼을 누르면, addRestaurant을 dispatch한다', () => {
    const { getByText } = renderInputContainer();

    fireEvent.click(getByText('등록'));

    expect(dispatch).toBeCalledWith(addRestaurant());
  });
});
