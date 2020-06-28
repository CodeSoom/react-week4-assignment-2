import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  context('when layout', () => {
    it('has input with name placeholder', () => {
      const { getByPlaceholderText } = render((
        <InputContainer />
      ));

      expect(getByPlaceholderText(/이름/)).not.toBeNull();
    });
    it('has input with category placeholder', () => {
      const { getByPlaceholderText } = render((
        <InputContainer />
      ));

      expect(getByPlaceholderText(/분류/)).not.toBeNull();
    });
    it('has input with address placeholder', () => {
      const { getByPlaceholderText } = render((
        <InputContainer />
      ));

      expect(getByPlaceholderText(/주소/)).not.toBeNull();
    });
    it('has button title', () => {
      const { container } = render((
        <InputContainer />
      ));

      expect(container).toHaveTextContent(/등록/);
    });
  });

  context('publish button', () => {
    it('click when all input filled', () => {
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        restaurantName: 'New Name',
        restaurantCategory: 'New Category',
        restaurantAddress: 'New Address',
      }));

      const { container, getByText, getByPlaceholderText } = render((
        <InputContainer />
      ));

      fireEvent.change(getByPlaceholderText(/이름/), { target: { value: 'test name' } });
      expect(container).toBeInTheDocument('test name');

      fireEvent.change(getByPlaceholderText(/분류/), { target: { value: 'test category' } });
      expect(container).toBeInTheDocument('test category');

      fireEvent.change(getByPlaceholderText(/주소/), { target: { value: 'test address' } });
      expect(container).toBeInTheDocument('test address');

      fireEvent.click(getByText(/등록/));
      expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });

      // TODO: 클릭 후 value가 사라졌는가?
    });
    it('disable to click when  one of input not filled', () => {
      // ASK: 어떻게? 방향성이 이게 맞는가.

      // const dispatch = jest.fn();
      // useDispatch.mockImplementation(() => dispatch);

      // useSelector.mockImplementation((selector) => selector({
      //   restaurantName: 'New Name',
      //   restaurantCategory: 'New Category',
      //   restaurantAddress: 'New Address',
      // }));

      // const { container, getByText, getByPlaceholderText } = render((
      //   <InputContainer />
      // ));

      // fireEvent.change(getByPlaceholderText(/이름/), { target: { value: '' } });
      // expect(container).toBeInTheDocument('test name');

      // fireEvent.change(getByPlaceholderText(/분류/), { target: { value: 'test category' } });
      // expect(container).toBeInTheDocument('test category');

      // fireEvent.change(getByPlaceholderText(/주소/), { target: { value: 'test address' } });
      // expect(container).toBeInTheDocument('test address');

      // fireEvent.click(getByText(/등록/));

      // expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });

      // fireEvent.change(getByPlaceholderText(/이름/), { target: { value: 'test name' } });
      // expect(container).toBeInTheDocument('test name');

      // fireEvent.change(getByPlaceholderText(/분류/), { target: { value: '' } });
      // expect(container).toBeInTheDocument('test category');

      // fireEvent.change(getByPlaceholderText(/주소/), { target: { value: 'test address' } });
      // expect(container).toBeInTheDocument('test address');

      // fireEvent.click(getByText(/등록/));

      // expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });
      // fireEvent.change(getByPlaceholderText(/이름/), { target: { value: 'test name' } });
      // expect(container).toBeInTheDocument('test name');

      // fireEvent.change(getByPlaceholderText(/분류/), { target: { value: 'test category' } });
      // expect(container).toBeInTheDocument('test category');

      // fireEvent.change(getByPlaceholderText(/주소/), { target: { value: '' } });
      // expect(container).toBeInTheDocument('test address');

      // fireEvent.click(getByText(/등록/));
      // expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });
    });
  });
});
