import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
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

  const events = {
    nameInputEvent: { target: { value: restaurant.name } },
    categoryInputEvent: { target: { value: restaurant.name } },
    addressInputEvent: { target: { value: restaurant.address } },
  };

  context('without any input', () => {
    it('renders empty inputs', () => {
      const { container } = render((
        <Input />
      ));

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
    const { container } = render((
      <Input
        onChanges={handleChanges}
      />
    ));

    const inputNameBox = container.querySelector('#input-name');

    fireEvent.change(inputNameBox, events.nameInputEvent);

    expect(handleChanges.name).toBeCalledTimes(1);
    expect(handleChanges.category).not.toBeCalled();
    expect(handleChanges.address).not.toBeCalled();
  });

  context('when input category of restaurant', () => {
    const { container } = render((
      <Input
        onChanges={handleChanges}
      />
    ));

    const inputCategoryBox = container.querySelector('#input-category');

    fireEvent.change(inputCategoryBox, events.categoryInputEvent);

    expect(handleChanges.name).not.toBeCalled();
    expect(handleChanges.category).toBeCalledTimes(1);
    expect(handleChanges.address).not.toBeCalled();
  });

  context('when input address of restaurant', () => {
    const { container } = render((
      <Input
        onChanges={handleChanges}
      />
    ));

    const inputAddressBox = container.querySelector('#input-address');

    fireEvent.change(inputAddressBox, events.addressInputEvent);

    expect(handleChanges.name).not.toBeCalled();
    expect(handleChanges.category).not.toBeCalled();
    expect(handleChanges.address).toBeCalledTimes(1);
  });

  context('when input restaurant all infomations', () => {
    it('click enroll button', () => {
      const { getByText } = render((
        <Input
          restaurant={restaurant}
          onChanges={handleChanges}
          onClick={handleClickEnrollRestaurant}
        />
      ));

      fireEvent.click(getByText('등록'));

      expect(handleChanges.name).toBeCalledTimes(1);
      expect(handleChanges.category).toBeCalledTimes(1);
      expect(handleChanges.address).toBeCalledTimes(1);
      expect(handleClickEnrollRestaurant).toBeCalledTimes(1);
    });
  });
});
