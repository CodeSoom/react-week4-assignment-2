import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantsFormContainer from './RestaurantsFormContainer';

import { inputValues } from '../fixtures/inputValues';

jest.mock('react-redux');

describe('RestaurantFormContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    inputValues,
  }));

  it('레스토랑 폼을 화면에 렌더한다.', () => {
    render(<RestaurantsFormContainer />);

    expect(screen.getByRole('button', { name: '등록' }));
  });
});
