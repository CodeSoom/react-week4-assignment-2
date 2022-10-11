import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
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

  it('renders label text', () => {
    const { getByText } = render(
      <InputContainer />,
    );

    expect(getByText(/등록/)).not.toBeNull();
  });
});
