import { render, fireEvent } from '@testing-library/react';

import restaurant from '../fixtures/restaurant';

import RestaurantForm from './RestaurantForm';

describe('RestaurantForm', () => {
  const handleChangeName = jest.fn();
  const handleChangeType = jest.fn();
  const handleChangeAddress = jest.fn();
  const handleSubmit = jest.fn((e) => e.preventDefault());

  const renderRestaurantForm = () => render((
    <RestaurantForm
      restaurant={restaurant}
      onChangeName={handleChangeName}
      onChangeType={handleChangeType}
      onChangeAddress={handleChangeAddress}
      onSubmit={handleSubmit}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders a name input', () => {
    const { getByPlaceholderText } = renderRestaurantForm();

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
  });

  it('renders a type input', () => {
    const { getByPlaceholderText } = renderRestaurantForm();

    expect(getByPlaceholderText('분류')).toBeInTheDocument();
  });

  it('renders a address input', () => {
    const { getByPlaceholderText } = renderRestaurantForm();

    expect(getByPlaceholderText('주소')).toBeInTheDocument();
  });

  it('renders a register button', () => {
    const { getByRole } = renderRestaurantForm();

    expect(getByRole('button', { name: '등록' })).toBeInTheDocument();
  });

  it('renders the restaurant name in props', () => {
    const { getByPlaceholderText } = renderRestaurantForm();

    expect(getByPlaceholderText('이름')).toHaveValue(restaurant.name);
  });

  it('renders the restaurant type in props', () => {
    const { getByPlaceholderText } = renderRestaurantForm();

    expect(getByPlaceholderText('분류')).toHaveValue(restaurant.type);
  });

  it('renders the restaurant address in props', () => {
    const { getByPlaceholderText } = renderRestaurantForm();

    expect(getByPlaceholderText('주소')).toHaveValue(restaurant.address);
  });

  it('listens change name event', () => {
    const { getByPlaceholderText } = renderRestaurantForm();

    fireEvent.change(getByPlaceholderText('이름'), { target: { value: '정돈' } });

    expect(handleChangeName).toBeCalled();
  });

  it('listens change type event', () => {
    const { getByPlaceholderText } = renderRestaurantForm();

    fireEvent.change(getByPlaceholderText('분류'), { target: { value: '일식' } });

    expect(handleChangeType).toBeCalled();
  });

  it('listens change address event', () => {
    const { getByPlaceholderText } = renderRestaurantForm();

    fireEvent.change(getByPlaceholderText('주소'), { target: { value: '서울시 서초구' } });

    expect(handleChangeAddress).toBeCalled();
  });

  it('listens submit event', () => {
    const { getByRole } = renderRestaurantForm();

    fireEvent.click(getByRole('button', { name: '등록' }));

    expect(handleSubmit).toBeCalled();
  });
});
