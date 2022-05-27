import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import TextBox from './TextBox';

jest.mock('react-redux');

const dispatch = jest.fn();

describe('TextBox', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurants: [],
      restaurantInfo: {
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      },
    }));
  });
  describe('Input', () => {
    context('with restaurantInfo', () => {
      it('returns value stored "restaurantInfo"', () => {
        const { getByPlaceholderText } = render(
          <TextBox />,
        );

        expect(getByPlaceholderText('이름')).toHaveValue('마녀주방');
        expect(getByPlaceholderText('분류')).toHaveValue('한식');
        expect(getByPlaceholderText('주소')).toHaveValue('서울시 강남구');
      });
    });
  });
  describe('button', () => {
    context('with "등록" button when clicked', () => {
      it('call dispatch with type name "addRestaurant"', () => {
        const { getByText } = render(<TextBox />);

        expect(getByText(/등록/)).not.toBeNull();

        fireEvent.click(getByText(/등록/));

        expect(dispatch).toBeCalledWith({
          type: 'addRestaurant',
        });
      });
    });
    context('without restaurantInfo', () => {
      it('returns empty value', () => {
        const { getByRole } = render(<TextBox />);
        fireEvent.click(getByRole('button'));
        expect(dispatch).toHaveBeenCalled();
      });
    });
    context('with restaurantInfo', () => {
      it('returns value stored "강식당"', () => {
        const { getByRole } = render(
          <TextBox />,
        );

        fireEvent.click(getByRole('button'));
        expect(dispatch).toHaveBeenCalled();
      });
    });
  });
});
