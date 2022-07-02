export default function Input(
  {
    name,
    category,
    address,
    handleInputChange,
    handleSubmit,
  },
) {
  function handleChangeName(e) {
    handleInputChange({ targetType: 'name', content: e.target.value });
  }

  function handleChangeCategory(e) {
    handleInputChange({ targetType: 'category', content: e.target.value });
  }

  function handleChangeAddress(e) {
    handleInputChange({ targetType: 'address', content: e.target.value });
  }

  function onSubmit() {
    handleSubmit();
  }
  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        value={name}
        onChange={handleChangeName}
      />
      <input
        name="category"
        placeholder="분류"
        value={category}
        onChange={handleChangeCategory}
      />
      <input
        name="address"
        placeholder="주소"
        value={address}
        onChange={handleChangeAddress}
      />
      <button onClick={onSubmit} type="button">등록</button>
    </div>
  );
}
