import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

import restaurant from '../__fixture__/data';

jest.mock('react-redux');

describe('<RestaurantForm />', () => {
  describe('Initial Rendering', () => {
    it('shows 3 inputs', () => {
      const { getByPlaceholderText } = render(
        <RestaurantForm restaurant={restaurant} />,
      );

      expect(getByPlaceholderText(/이름/i)).toBeInTheDocument();
      expect(getByPlaceholderText(/분류/i)).toBeInTheDocument();
      expect(getByPlaceholderText(/주소/i)).toBeInTheDocument();
    });

    it('shows a button for adding a restaurant ', () => {
      const { getByRole } = render(<RestaurantForm restaurant={restaurant} />);

      expect(getByRole('button')).toHaveTextContent(/등록/i);
    });
  });

  describe('User Interaction', () => {
    context('when the user input a new restaurant', () => {
      it('shows a new restaurant name in input', () => {
        const handleChangeName = jest.fn();

        const { getByPlaceholderText } = render(
          <RestaurantForm
            restaurant={restaurant}
            onChangeName={handleChangeName}
          />,
        );

        expect(handleChangeName).not.toBeCalled();

        fireEvent.change(getByPlaceholderText(/이름/i), {
          target: {
            value: '이름1',
          },
        });
        expect(handleChangeName).toBeCalledTimes(1);
      });

      it('shows a new restaurant type in inputs', () => {
        const handleChangeType = jest.fn();

        const { getByPlaceholderText } = render(
          <RestaurantForm
            restaurant={restaurant}
            onChangeType={handleChangeType}
          />,
        );

        expect(handleChangeType).not.toBeCalled();

        fireEvent.change(getByPlaceholderText(/분류/i), {
          target: {
            value: '분류1',
          },
        });

        expect(getByPlaceholderText(/분류/i).value).toBe('분류1');

        expect(handleChangeType).toBeCalledTimes(1);
      });

      it('shows a new restaurant address in inputs', () => {
        const handleChangeAddress = jest.fn();

        const { getByPlaceholderText } = render(
          <RestaurantForm
            restaurant={restaurant}
            onChangeAddress={handleChangeAddress}
          />,
        );

        expect(handleChangeAddress).not.toBeCalled();

        fireEvent.change(getByPlaceholderText(/주소/i), {
          target: {
            value: '주소1',
          },
        });

        expect(handleChangeAddress).toBeCalledTimes(1);

        expect(getByPlaceholderText(/주소/i).value).toBe('주소1');
      });
    });

    context('when the user add a new restaurant', () => {
      it('input is empty', () => {
        const handleAddRestaurant = jest.fn();

        const { getByText } = render(
          <RestaurantForm
            restaurant={restaurant}
            onClickAddRestaurant={handleAddRestaurant}
          />,
        );
        expect(handleAddRestaurant).not.toBeCalled();

        fireEvent.click(getByText(/등록/i));

        expect(handleAddRestaurant).toBeCalledTimes(1);
      });
    });
  });
});
