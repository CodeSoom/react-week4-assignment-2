import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Inputs from './Inputs';

describe('Inputs', () => {
  const handleChanges = {
    name: jest.fn(),
    category: jest.fn(),
    address: jest.fn(),
  };

  const handleClickEnrollRestaurant = jest.fn();

  const restaurant = {
    name: '버튼업',
    category: '경양식',
    address: '마포구',
  };

  const undefinedRestaurant = {
    name: undefined,
    category: undefined,
    address: undefined,
  };

  const events = {
    nameInputEvent: { target: { value: restaurant.name } },
    categoryInputEvent: { target: { value: restaurant.name } },
    addressInputEvent: { target: { value: restaurant.address } },
  };

  function renderInputs(value) {
    return render((
      <Inputs
        value={value}
        onChanges={handleChanges}
        onClick={handleClickEnrollRestaurant}
      />
    ));
  }

  context('without any input', () => {
    it('renders empty inputs', () => {
      const { container } = renderInputs(undefinedRestaurant);

      const inputNameBox = container.querySelector('#input-name');
      const inputCategoryBox = container.querySelector('#input-category');
      const inputAddressBox = container.querySelector('#input-address');

      expect(inputNameBox.placeholder).toBe('이름');
      expect(inputCategoryBox.placeholder).toBe('분류');
      expect(inputAddressBox.placeholder).toBe('주소');

      expect(container).toHaveTextContent('등록');
    });
  });

  context('when input name of restaurant', () => {
    it('renders name of restaurant', () => {
      const { container } = renderInputs(undefinedRestaurant);

      const inputNameBox = container.querySelector('#input-name');

      fireEvent.change(inputNameBox, events.nameInputEvent);

      expect(handleChanges.name).toBeCalledTimes(1);
    });
  });

  context('when input category of restaurant', () => {
    it('renders category of restaurant', () => {
      const { container } = renderInputs(undefinedRestaurant);

      const inputCategoryBox = container.querySelector('#input-category');

      fireEvent.change(inputCategoryBox, events.categoryInputEvent);

      expect(handleChanges.category).toBeCalledTimes(1);
    });
  });

  context('when input address of restaurant', () => {
    it('renders category of restaurant', () => {
      const { container } = renderInputs(undefinedRestaurant);

      const inputAddressBox = container.querySelector('#input-address');

      fireEvent.change(inputAddressBox, events.addressInputEvent);

      expect(handleChanges.address).toBeCalledTimes(1);
    });
  });

  context('when input restaurant all infomations', () => {
    it('click enroll button', () => {
      const { getByText } = renderInputs(restaurant);

      fireEvent.click(getByText('등록'));

      expect(handleChanges.name).toBeCalledTimes(1);
      expect(handleChanges.category).toBeCalledTimes(1);
      expect(handleChanges.address).toBeCalledTimes(1);
      expect(handleClickEnrollRestaurant).toBeCalledTimes(1);
    });
  });
});
