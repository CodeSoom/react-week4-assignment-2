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
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
    }));
  });
  describe('Input', () => {
    context('with restaurant', () => {
      it('returns value stored "restaurant"', () => {
        const { getByPlaceholderText } = render(
          <TextBox />,
        );
        fireEvent.change(getByPlaceholderText('이름'), { target: { value: '마녀주방' } });

        expect(dispatch).toBeCalled();
      });
    });
  });
  describe('Button', () => {
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
    context('without restaurant', () => {
      it('returns empty value', () => {
        const { getByRole } = render(<TextBox />);
        fireEvent.click(getByRole('button'));
        expect(dispatch).toHaveBeenCalled();
      });
    });
    context('with restaurant', () => {
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
