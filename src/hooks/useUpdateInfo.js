import { useDispatch } from 'react-redux';

import { updateField } from '../redux/actions';

export default function useUpdateInfo() {
  const dispatch = useDispatch();
  const updateInfo = (field, value) => dispatch(
    updateField({ field, value }),
  );

  return { updateInfo };
}
