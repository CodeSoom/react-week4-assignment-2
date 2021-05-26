import { renderHook, act } from '@testing-library/react-hooks';
import { useDispatch } from 'react-redux';

import useUpdateInfo from './useUpdateInfo';
import { updateField } from '../redux/actions';

jest.mock('react-redux');

describe('useUpdateInfo', () => {
  it('returns updateInfo funtion', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    const { result } = renderHook(() => useUpdateInfo());

    act(() => {
      result.current.updateInfo('name', '마녀주방');
    });

    expect(dispatch).toBeCalledWith(updateField({
      field: 'name',
      value: '마녀주방',
    }));
  });
});
