import Input from "./Input";

export function handleChange(e) {
  console.log(e.target.value);
}

export default function InputContainer() {
  function handleClick() {
    console.log("눌러졌어요");
  }

  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <Input onClick={handleClick} onChange={handleChange} />
    </div>
  );
}
