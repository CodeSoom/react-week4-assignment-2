import { renderHook, act } from '@testing-library/react-hooks';
import { useDispatch, useSelector } from 'react-redux';

import useRestaurants from './useRestaurants';
import { addNewRestaurant } from '../redux/actions';

jest.mock('react-redux');

describe('useRestaurants', () => {
  const state = {
    newRestaurant: {
      id: 1,
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    },
    restaurants: [],
  };

  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector(state));
  });

  it('returns restaurants array', () => {
    const { result } = renderHook(() => useRestaurants());

    expect(result.current.restaurants).toEqual([]);
  });

  it('returns addNewToRestaurants funtion', () => {
    const { result } = renderHook(() => useRestaurants());

    act(() => {
      result.current.addNewToRestaurants();
    });

    expect(dispatch).toBeCalledWith(addNewRestaurant({
      id: 1,
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    }));
  });
});
