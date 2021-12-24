import { useDispatch } from "react-redux";
import Input from "./Input";

import { changeInput, registerInput } from "./actions";

export default function InputContainer() {
  const dispatch = useDispatch();
  function handleChange(value, indexname) {
    dispatch(changeInput(value, indexname));
  }
  function handleClick() {
    dispatch(registerInput());
  }
  return (
    <div>
      <Input onClick={handleClick} onChange={handleChange} />
    </div>
  );
}
