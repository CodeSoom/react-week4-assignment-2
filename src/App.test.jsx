import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

import { useSelector } from '../__mocks__/react-redux';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    newId: 100,
    restaurantTitles: [
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
    ],
    restaurants: [
      {
        id: 101,
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      },
      {
        id: 102,
        name: '시카고피자',
        category: '양식',
        address: '이태원동',
      },
      {
        id: 103,
        name: '카와미',
        category: '일식',
        address: '분당구 정자동',
      },
    ],
  }));

  context('when restaurants empty', () => {
    it('shows input page', () => {
      const { getByText, getByPlaceholderText } = render((
        <App />
      ));

      expect(getByText('Restaurants')).toBeInTheDocument();

      expect(getByPlaceholderText('이름')).toBeInTheDocument();

      expect(getByPlaceholderText('분류')).toBeInTheDocument();

      expect(getByPlaceholderText('주소')).toBeInTheDocument();

      expect(getByText('등록')).not.toBeNull();
    });
  });

  context('when restauransts exist', () => {
    it('shows restaurants list', () => {
      const { container } = render((
        <App />
      ));

      expect(container).toHaveTextContent('마녀주방');
      expect(container).toHaveTextContent('한식');
      expect(container).toHaveTextContent('서울시 강남구');
    });
  });
});
