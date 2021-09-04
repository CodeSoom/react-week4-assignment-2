import Input from './Input';

export default function Form({
  nameText,
  categoryText,
  addressText,
  onChangeName,
  onChangeCategory,
  onChangeAddress,
  onClick,
}) {
  return ((
    <div>
      <Input name="name" placeholder="이름" valueText={nameText} onChange={onChangeName} />
      <Input name="category" placeholder="분류" valueText={categoryText} onChange={onChangeCategory} />
      <Input name="address" placeholder="주소" valueText={addressText} onChange={onChangeAddress} />
      <button type="submit" onClick={onClick}>등록</button>
    </div>
  ));
}
