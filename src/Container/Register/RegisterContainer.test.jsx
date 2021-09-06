import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegisterContainer from './RegisterContainer';

jest.mock('react-redux');

describe('RegisterContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('has taskTitle of redux state as a input value', () => {
    useSelector.mockImplementation((selector) => selector({
      name: '마녀주방',
      category: '분식',
      address: '서울시 강남구',
    }));

    const { getByDisplayValue } = render((
      <RegisterContainer />
    ));

    expect(getByDisplayValue(/마녀주방/)).not.toBeNull();
    expect(getByDisplayValue(/분식/)).not.toBeNull();
    expect(getByDisplayValue(/서울시 강남구/)).not.toBeNull();
  });

  it('calls updateRestaurantInfo action', () => {
    useSelector.mockImplementation((selector) => selector({
      name: '',
      category: '',
      address: '',
    }));

    const { getByPlaceholderText } = render((
      <RegisterContainer />
    ));

    expect(getByPlaceholderText('이름')).toHaveValue('');
    expect(getByPlaceholderText('분류')).toHaveValue('');
    expect(getByPlaceholderText('주소')).toHaveValue('');

    fireEvent.change(getByPlaceholderText('이름'), {
      target: { value: '마녀주방' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'updateRestaurantInfo',
      payload: { infoType: 'name', value: '마녀주방' },
    });

    fireEvent.change(getByPlaceholderText('분류'), {
      target: { value: '분식' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'updateRestaurantInfo',
      payload: { infoType: 'category', value: '분식' },
    });

    fireEvent.change(getByPlaceholderText('주소'), {
      target: { value: '서울시 강남구' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'updateRestaurantInfo',
      payload: { infoType: 'address', value: '서울시 강남구' },
    });
  });

  it('calls addRestaurant action', () => {
    useSelector.mockImplementation((selector) => selector({
      name: '마녀주방',
      category: '분식',
      address: '서울시 강남구',
    }));

    const { getByText } = render((
      <RegisterContainer />
    ));

    expect(getByText('등록')).not.toBeNull();

    fireEvent.click(getByText('등록'));

    expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });
  });
});
