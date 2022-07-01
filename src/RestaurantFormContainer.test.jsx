import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import restaurant from '../fixtures/restaurant';

import {
  addRestaurant,
  updateRestaurantAddress,
  updateRestaurantName,
  updateRestaurantType,
} from './actions';

import RestaurantFormContainer from './RestaurantFormContainer';

describe('RestaurantFormContainer', () => {
  Date.now = jest.fn(() => 1656683471);

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((state) => state({
    restaurant,
  }));

  const renderRestaurantFormContainer = () => render(<RestaurantFormContainer />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders restaurant', () => {
    const { getByPlaceholderText } = renderRestaurantFormContainer();

    expect(getByPlaceholderText('이름')).toHaveValue(restaurant.name);
    expect(getByPlaceholderText('분류')).toHaveValue(restaurant.type);
    expect(getByPlaceholderText('주소')).toHaveValue(restaurant.address);
  });

  it('dispatches a updateRestaurantName when name input is changed', () => {
    const { getByPlaceholderText } = renderRestaurantFormContainer();

    fireEvent.change(getByPlaceholderText('이름'), { target: { value: '정돈' } });

    expect(dispatch).toBeCalledWith(updateRestaurantName('정돈'));
  });

  it('dispatches a updateRestaurantType when type input is changed', () => {
    const { getByPlaceholderText } = renderRestaurantFormContainer();

    fireEvent.change(getByPlaceholderText('분류'), { target: { value: '일식' } });

    expect(dispatch).toBeCalledWith(updateRestaurantType('일식'));
  });

  it('dispatches a updateRestaurantAddress when address input is changed', () => {
    const { getByPlaceholderText } = renderRestaurantFormContainer();

    fireEvent.change(getByPlaceholderText('주소'), { target: { value: '서울시 서초구' } });

    expect(dispatch).toBeCalledWith(updateRestaurantAddress('서울시 서초구'));
  });

  it('dispatches a addRestaurant when register button is clicked', () => {
    const { getByRole } = renderRestaurantFormContainer();

    fireEvent.click(getByRole('button', { name: '등록' }));

    expect(dispatch).toBeCalledWith(addRestaurant(Date.now()));
  });
});
