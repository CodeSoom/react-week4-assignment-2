import Input from "./Input";

import { changeInput, registerInput } from "./actions";

import { useDispatch } from "react-redux";

export function handleChange(e) {
  console.log(e.target.value);
}

export default function InputContainer() {
  const dispatch = useDispatch();
  function handleChange(text) {
    dispatch(changeInput(text));
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
