/* eslint-disable no-shadow */
import { Fragment } from 'react';

export default function Input(
  {
    name,
    category,
    address,
    handleInputChange,
    handleSubmit,
  },
) {
  function InputHandler(e) {
    const { target: { name } } = e;
    handleInputChange({ targetType: name, content: e.target.value });
  }

  function onSubmit() {
    handleSubmit();
  }

  const inputContents = [
    {
      type: 'name',
      value: name,
      placeholder: '이름',
    },
    {
      type: 'category',
      value: category,
      placeholder: '분류',
    },
    {
      type: 'address',
      value: address,
      placeholder: '주소',
    },
  ];

  return (
    <div>
      {inputContents.map(({ type, value, placeholder }) => (
        <Fragment key={type}>
          <input
            name={type}
            value={value}
            placeholder={placeholder}
            onChange={InputHandler}
          />
        </Fragment>
      ))}
      <button onClick={onSubmit} type="button">등록</button>
    </div>
  );
}
