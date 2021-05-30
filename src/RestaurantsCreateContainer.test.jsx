import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsCreateContainer from './RestaurantsCreateContainer';

jest.mock('react-redux');

test('RestaurantsCreateContainer', () => {
  useSelector.mockImplementation((selector) => selector({
  }));

  const { container } = render(<RestaurantsCreateContainer />);

  expect(container).toHaveTextContent('등록');
});
