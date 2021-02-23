import React from 'react';
import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  it('should have ListContainer and InputContainer', () => {
    const { container } = render(<RestaurantsContainer />);

    expect(container.querySelector('.list-container')).toBeInTheDocument();
    expect(container.querySelector('.input-container')).toBeInTheDocument();
  });
});
