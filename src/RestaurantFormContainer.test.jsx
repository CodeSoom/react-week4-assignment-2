import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantFormContainer from './RestaurantFormContainer';

jest.mock('react-redux');

describe('RestaurantFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        restaurant: {
          name: '',
          category: '',
          address: '',
        },
      },
    }));
  });

  context('when form is not submitted', () => {
    it('renders input controls and "등록" button', () => {
      const { queryByText, getByPlaceholderText } = render((
        <RestaurantFormContainer />
      ));

      expect(getByPlaceholderText('이름')).not.toBeNull();
      expect(getByPlaceholderText('분류')).not.toBeNull();
      expect(getByPlaceholderText('주소')).not.toBeNull();
      expect(queryByText('등록')).not.toBeNull();
    });
  });
});
