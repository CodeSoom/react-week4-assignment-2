import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

import restaurants from '../__fixture__/data';

import {
  changeName, changeType, changeAddress, addRestaurant,
} from './action';

jest.mock('react-redux');

function renderApp() {
  return render(<App />);
}

describe('<App />', () => {
  describe('Initial Rendering', () => {
    it('shows a app title', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [],
      }));

      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);

      const { container } = renderApp();

      expect(container).toHaveTextContent('Restaurants');
    });

    context('with restaurants', () => {
      it('shows restaurants', () => {
        useSelector.mockImplementation((selector) => selector({
          restaurants,
        }));

        const dispatch = jest.fn();
        useDispatch.mockImplementation(() => dispatch);

        const { getByText } = renderApp();

        expect(getByText(/레스토랑1/i)).toBeInTheDocument();
        expect(getByText(/분류1/i)).toBeInTheDocument();
        expect(getByText(/주소1/i)).toBeInTheDocument();

        expect(getByText(/레스토랑2/i)).toBeInTheDocument();
        expect(getByText(/분류2/i)).toBeInTheDocument();
        expect(getByText(/주소2/i)).toBeInTheDocument();

        expect(getByText(/레스토랑3/i)).toBeInTheDocument();
        expect(getByText(/분류3/i)).toBeInTheDocument();
        expect(getByText(/주소3/i)).toBeInTheDocument();
      });
    });

    context('without restaurants', () => {
      it('shows nothing', () => {
        const dispatch = jest.fn();
        useDispatch.mockImplementation(() => dispatch);

        useSelector.mockImplementation((selector) => selector({
          restaurants: [],
        }));

        const { container } = renderApp();

        expect(container).not.toHaveTextContent(/레스토랑1/i);
        expect(container).not.toHaveTextContent(/분류1/i);
        expect(container).not.toHaveTextContent(/주소1/i);

        expect(container).not.toHaveTextContent(/레스토랑2/i);
        expect(container).not.toHaveTextContent(/분류2/i);
        expect(container).not.toHaveTextContent(/주소2/i);

        expect(container).not.toHaveTextContent(/레스토랑3/i);
        expect(container).not.toHaveTextContent(/분류3/i);
        expect(container).not.toHaveTextContent(/주소3/i);
      });
    });

    it('shows 3 inputs', () => {
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);

      const { getByPlaceholderText } = renderApp();

      expect(getByPlaceholderText(/이름/i)).toBeInTheDocument();
      expect(getByPlaceholderText(/분류/i)).toBeInTheDocument();
      expect(getByPlaceholderText(/주소/i)).toBeInTheDocument();
    });

    it('shows a button for adding a restaurant ', () => {
      const { getByRole } = renderApp();

      expect(getByRole('button')).toHaveTextContent(/등록/i);
    });
  });

  describe('User Interaction', () => {
    context('when the user input a new restaurant', () => {
      it('shows a new restaurant name in input', () => {
        useSelector.mockImplementation((selector) => selector({
          restaurants: [],
        }));

        const dispatch = jest.fn();
        useDispatch.mockImplementation(() => dispatch);

        const { getByPlaceholderText } = renderApp();

        fireEvent.change(getByPlaceholderText(/이름/i), {
          target: {
            value: '이름1',
          },
        });

        expect(getByPlaceholderText(/이름/i).value).toBe('이름1');

        expect(dispatch).toHaveBeenCalledWith(changeName('이름1'));

        expect(dispatch).toHaveBeenCalledTimes(1);
      });

      it('shows a new restaurant type in inputs', () => {
        useSelector.mockImplementation((selector) => selector({
          restaurants: [],
        }));

        const dispatch = jest.fn();
        useDispatch.mockImplementation(() => dispatch);

        const { getByPlaceholderText } = renderApp();

        fireEvent.change(getByPlaceholderText(/분류/i), {
          target: {
            value: '분류1',
          },
        });

        expect(getByPlaceholderText(/분류/i).value).toBe('분류1');

        expect(dispatch).toHaveBeenCalledWith(changeType('분류1'));

        expect(dispatch).toHaveBeenCalledTimes(1);
      });

      it('shows a new restaurant address in inputs', () => {
        useSelector.mockImplementation((selector) => selector({
          restaurants: [],
        }));

        const dispatch = jest.fn();
        useDispatch.mockImplementation(() => dispatch);

        const { getByPlaceholderText } = renderApp();

        fireEvent.change(getByPlaceholderText(/주소/i), {
          target: {
            value: '주소1',
          },
        });

        expect(getByPlaceholderText(/주소/i).value).toBe('주소1');

        expect(dispatch).toHaveBeenCalledWith(changeAddress('주소1'));

        expect(dispatch).toHaveBeenCalledTimes(1);
      });
    });

    context('when the user add a new restaurant', () => {
      it('input is empty', () => {
        useSelector.mockImplementation((selector) => selector({
          restaurants: [],
          restaurantName: '레스토랑4',
          restaurantType: '분류4',
          restaurantAddress: '주소4',
        }));

        const dispatch = jest.fn();
        useDispatch.mockImplementation(() => dispatch);

        const { getByText } = renderApp();

        fireEvent.click(getByText(/등록/i));

        expect(dispatch).toHaveBeenCalledWith(addRestaurant());

        expect(dispatch).toHaveBeenCalledTimes(1);
      });

      it('shows a new restaurant into restaurants', () => {
        useSelector.mockImplementation((selector) => selector({
          restaurants: [],
          restaurantName: '레스토랑4',
          restaurantType: '분류4',
          restaurantAddress: '주소4',
        }));

        const dispatch = jest.fn();

        useDispatch.mockImplementation(() => dispatch);

        const { getByText, container } = renderApp();

        fireEvent.click(getByText(/등록/i));

        expect(container).not.toHaveTextContent(/레스토랑1/i);
        expect(container).not.toHaveTextContent(/분류1/i);
        expect(container).not.toHaveTextContent(/주소1/i);

        expect(dispatch).toHaveBeenCalledWith(addRestaurant());

        expect(dispatch).toHaveBeenCalledTimes(1);
      });
    });
  });
});
