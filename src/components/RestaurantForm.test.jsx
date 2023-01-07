import { render, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import RestaurantForm from './RestaurantForm';

import { emptyInputValues } from '../fixtures/inputValues';

jest.mock('react-redux');

describe('RestaurantForm', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const updateRestaurantForm = jest.fn();
  const addNewRestaurant = jest.fn();

  it('레스토랑 등록 폼을 화면에 렌더한다.', () => {
    render(
      <RestaurantForm
        inputValues={emptyInputValues}
        onUpdateRestaurantForm={updateRestaurantForm}
        onAddNewRestaurant={addNewRestaurant}
      />,
    );

    expect(screen.getByRole('button', { name: '등록' })).toBeInTheDocument();
  });
});
