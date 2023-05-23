import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantsFormContainer from './RestaurantsFormContainer';

import { emptyInputValues } from '../fixtures/inputValues';

jest.mock('react-redux');

describe('RestaurantFormContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    inputValues: emptyInputValues,
  }));

  it('레스토랑 폼을 화면에 렌더한다.', () => {
    render(<RestaurantsFormContainer />);

    expect(screen.getByRole('button', { name: '등록' }));
  });

  it('inputValues state는 초기 값을 가진다.', () => {
    render(<RestaurantsFormContainer />);

    const store = useSelector((state) => ({
      inputValues: state.inputValues,
    }));

    expect(store.inputValues).toBe(emptyInputValues);
  });
});
