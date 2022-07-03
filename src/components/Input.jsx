export default function Input(
  {
    title,
    category,
    address,
    handleInputChange,
    handleSubmit,
  },
) {
  function inputHandler(e) {
    const { target: { name } } = e;
    handleInputChange({ targetType: name, content: e.target.value });
  }

  function onSubmit() {
    handleSubmit();
  }
  return (
    <div>
      <input
        name="title"
        placeholder="이름"
        value={title}
        onChange={inputHandler}
      />
      <input
        name="category"
        placeholder="분류"
        value={category}
        onChange={inputHandler}
      />
      <input
        name="address"
        placeholder="주소"
        value={address}
        onChange={inputHandler}
      />
      <button onClick={onSubmit} type="button">등록</button>
    </div>
  );
}
