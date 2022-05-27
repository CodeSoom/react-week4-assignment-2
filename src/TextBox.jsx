import Input from './Input';

export default function TextBox({ onChange, restaurantInfo, onClick }) {
  const { name, category, address } = restaurantInfo;
  return (
    <>
      <Input name="name" placeholder="이름" onChange={onChange} value={name} />
      <Input name="category" placeholder="분류" onChange={onChange} value={category} />
      <Input name="address" placeholder="주소" onChange={onChange} value={address} />
      <button type="button" onClick={onClick}>등록</button>
    </>
  );
}
