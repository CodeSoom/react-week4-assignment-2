import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import { changeInput, registerInput } from './actions';

export default function InputContainer() {
  const restaurant = useSelector((state) => state.changed);
  const dispatch = useDispatch();

  function handleChange(value, name) {
    dispatch(changeInput(value, name));
  }

  function handleClick() {
    dispatch(registerInput());
  }

  return (
    <div>
      <Input
        onClick={handleClick}
        onChange={handleChange}
        restaurant={restaurant}
      />
    </div>
  );
}
