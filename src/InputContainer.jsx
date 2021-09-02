export default function InputContainer({
  nameText, categoryText, addressText,
  handleChangeName, handleChangeCategory, handleChangeAddress,
}) {
  return ((
    <div>
      <input name="name" placeholder="이름" value={nameText} onChange={handleChangeName} />
      <input name="category" placeholder="분류" value={categoryText} onChange={handleChangeCategory} />
      <input name="address" placeholder="주소" value={addressText} onChange={handleChangeAddress} />
      <button type="submit">등록</button>
    </div>
  ));
}
