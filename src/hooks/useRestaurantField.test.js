import { renderHook, act } from '@testing-library/react-hooks';
import { useDispatch } from 'react-redux';

import useRestaurantField from './useRestaurantField';
import { updateRestaurantField } from '../redux/actions';

jest.mock('react-redux');

describe('useUpdateInfo', () => {
  it('returns updateInfo funtion', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    const { result } = renderHook(() => useRestaurantField());

    act(() => {
      result.current.setRestaurantField('name', '마녀주방');
    });

    expect(dispatch).toBeCalledWith(updateRestaurantField({
      field: 'name',
      value: '마녀주방',
    }));
  });
});
