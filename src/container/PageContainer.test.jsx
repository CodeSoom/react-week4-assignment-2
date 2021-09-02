import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import PageContainer from './PageContainer';

jest.mock('react-redux');

describe('PageContainer', () => {
  const restaurantTitles = [
    {
      name: 'name',
      placeholder: '이름',
      value: '',
    },
    {
      name: 'category',
      placeholder: '분류',
      value: '',
    },
    {
      name: 'address',
      placeholder: '주소',
      value: '',
    },
  ];

  it('inputs restaurant information', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurantTitles,
    }));

    const { getByText, getByPlaceholderText } = render((
      <PageContainer />
    ));

    expect(getByPlaceholderText('이름')).toBeInTheDocument();

    fireEvent.change(getByPlaceholderText('이름'), {
      target: { value: '내 최애 맛집' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'updateRestaurantTitle',
      payload: {
        name: 'name',
        value: '내 최애 맛집',
      },
    });

    fireEvent.click(getByText('등록'));

    expect(dispatch).toBeCalledWith({
      type: 'addRestaurant',
    });
  });
});
