import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    shopName: '',
    shopType: '',
    shopAddress: '',
    restaurants: [
      {
        id: 1, name: '마녀주방', type: '한식', address: '서울시 강남구',
      },
    ],
  }));

  context('with List', () => {
    it('renders restaurans list', () => {
      const { getByText } = render(
        <ListContainer />,
      );

      expect(getByText(/마녀주방/)).not.toBeNull();
    });
  });
});
