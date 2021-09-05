import Input from './Input';

export default function Form({
  nameText,
  categoryText,
  addressText,
  onChangeInput,
  onClick,
}) {
  return ((
    <div>
      <Input inputName="name" placeholder="이름" valueText={nameText} onChange={onChangeInput} />
      <Input inputName="category" placeholder="분류" valueText={categoryText} onChange={onChangeInput} />
      <Input inputName="address" placeholder="주소" valueText={addressText} onChange={onChangeInput} />
      <button type="submit" onClick={onClick}>등록</button>
    </div>
  ));
}
