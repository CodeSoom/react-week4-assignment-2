import React from 'react';

import {
  render, fireEvent, useDispatch, useSelector,
} from '@testing-library/react';

import InputsContainer from './InputsContainer';

jest.mock('react-redux');

describe('InputsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  const testRestaurant = {
    name: '버튼업',
    category: '경양식',
    address: '마포구',
  };

  context('when change input restaurant infomation', () => {
    it('dispatch updateRestaurant', () => {
      const { container } = render((
        <InputsContainer />
      ));

      const inputNameBox = container.querySelector('#input-name');
      const inputCategoryBox = container.querySelector('#input-category');
      const inputAddressBox = container.querySelector('#input-address');

      const testInputNameEvent = { target: { value: testRestaurant.name } };
      const testCategoryNameEvent = { target: { value: testRestaurant.category } };
      const testInputAddressEvent = { target: { value: testRestaurant.address } };

      fireEvent.change(inputNameBox, testInputNameEvent);
      fireEvent.change(inputCategoryBox, testCategoryNameEvent);
      fireEvent.change(inputAddressBox, testInputAddressEvent);

      expect(dispatch).toBeCalledWith({
        type: 'updateRestaurant',
        payload: {
          restaurant: testRestaurant,
        },
      });
    });
  });

  context('when click enroll button', () => {
    it('dispatch addRestaurant', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: testRestaurant,
      }));

      const { getByText, getByDisplayValue } = render((
        <InputsContainer />
      ));

      expect(getByText(/등록/)).toBeInTheDocument();
      expect(getByDisplayValue(testRestaurant.name)).toBeInTheDocument();
      expect(getByDisplayValue(testRestaurant.category)).toBeInTheDocument();
      expect(getByDisplayValue(testRestaurant.address)).toBeInTheDocument();

      fireEvent.click(getByText(/등록/));

      expect(dispatch).toBeCalledWith({
        type: 'addRestaurant',
      });
    });
  });
});
