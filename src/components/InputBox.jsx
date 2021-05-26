export default function InputBox({ name }) {
  return (
    <>
      <label htmlFor={`input-${name}`}>
        {name}
      </label>
      <input
        id={`input-${name}`}
        type="text"
        placeholder={name}
      />
    </>
  );
}
