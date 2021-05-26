import { useDispatch } from 'react-redux';

import { updateField } from '../redux/actions';

export default function InputBox({ name }) {
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      name={name}
      placeholder={name}
      onBlur={(e) => dispatch(
        updateField(
          {
            field: name,
            value: e.target.value,
          },
        ),
      )}
    />
  );
}
