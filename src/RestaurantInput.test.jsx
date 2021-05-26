import React from 'react';

import { render } from '@testing-library/react';

import RestaurantInput from './RestaurantInput';

jest.mock('react-redux');

describe('RestaurantInput', () => {
  it('renders 입력창과 등록 버튼', () => {
    const { getByText, getByPlaceholderText } = render(<RestaurantInput />);

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();
  });
});
