import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantFormContainer from './RestaurantFormContainer';

jest.mock('react-redux');

describe('RestaurantFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        name: '밥',
        category: '한식',
        address: '서울',
      },
    }));

    useDispatch.mockImplementation(() => dispatch);

    jest.clearAllMocks();
  });

  context('when change restaurant information in RestaurantForms', () => {
    it('calls update dispatch', () => {
      const { getByDisplayValue } = render(<RestaurantFormContainer />);

      fireEvent.change(getByDisplayValue(/밥/), { target: { value: '피자' } });

      expect(dispatch).toBeCalledWith({
        type: 'updateInformation',
        payload: {
          name: 'name',
          value: '피자',
        },
      });
    });
  });

  context('when click 등록 button', () => {
    it('calls add dispatch', () => {
      const { getByText } = render(<RestaurantFormContainer />);

      fireEvent.click(getByText('등록'));

      expect(dispatch).toBeCalledWith({
        type: 'addInformation',
        payload: {
          name: '밥',
          category: '한식',
          address: '서울',
        },
      });
    });

    it('calls initializeRestaurantForm dispatch', () => {
      const { getByText } = render(<RestaurantFormContainer />);

      fireEvent.click(getByText('등록'));

      expect(dispatch).toBeCalledWith({ type: 'initializeRestaurantForm' });
    });
  });
});
