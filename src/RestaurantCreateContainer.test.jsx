import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantCreateContainer from './RestaurantCreateContainer';

describe('RestaurantCreateContainer', () => {
  useSelector.mockImplementation((selector) => selector({

  }));

  it('renders 등록 button', () => {
    const { queryByText } = render((
      <RestaurantCreateContainer />
    ));

    expect(queryByText(/등록/)).not.toBeNull();
  });
});
