import { useDispatch } from 'react-redux';

export default function InputBox({ name }) {
  const dispatch = useDispatch();
  return (
    <>
      <label htmlFor={`input-${name}`}>
        {name}
      </label>
      <input
        id={`input-${name}`}
        type="text"
        placeholder={name}
        onBlur={(e) => dispatch(e.target.value)}
      />
    </>
  );
}
