import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('<RestaurantsContainer />', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [{ id: 1, value: '낙원관 | 중식 | 서울 성동구' }],
  }));

  const renderList = () => render(<RestaurantsContainer />);

  it('renders restaurants list', () => {
    // When
    const { getByRole } = renderList();

    // Then
    expect(getByRole('list')).toHaveTextContent('낙원관 | 중식 | 서울 성동구');
  });
});
