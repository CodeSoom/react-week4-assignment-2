export default function InputView({
  name,
  category,
  address,
  onChangeName,
  onChangeCategory,
  onChangeAddress,
  onClickAdd,
}) {
  return (
    <form aria-label="form">
      <input type="text" aria-label="name" id="name" name="name" placeholder="이름" value={name} onChange={onChangeName} />
      <input type="text" aria-label="category" id="category" name="category" placeholder="분류" value={category} onChange={onChangeCategory} />
      <input type="text" aria-label="address" id="address" name="address" placeholder="주소" value={address} onChange={onChangeAddress} />
      <button type="button" onClick={onClickAdd}>등록</button>
    </form>
  );
}
