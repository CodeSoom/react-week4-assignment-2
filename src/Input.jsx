export default function Input({ name, category, address }) {
  return (
    <div>
      <input type="text" name="name" placeholder="이름" value={name} readOnly />
      <input type="text" name="category" placeholder="분류" value={category} readOnly />
      <input type="text" name="address" placeholder="주소" value={address} readOnly />
      <button type="button">등록</button>
    </div>
  );
}
