export default function Input({
  name,
  category,
  address,
  onChangeName,
  onChangeCategory,
  onChangeAddress,
}) {
  return (
    <>
      <input
        type='text'
        placeholder='이름'
        value={name}
        onChange={onChangeName}
      />
      <input
        type='text'
        placeholder='분류'
        value={category}
        onChange={onChangeCategory}
      />
      <input
        type='text'
        placeholder='주소'
        value={address}
        onChange={onChangeAddress}
      />
      <button type='button'>등록</button>
    </>
  );
}
