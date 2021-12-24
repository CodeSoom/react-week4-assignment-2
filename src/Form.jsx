export default function Form({
  name, category, address, onChangeByName,
}) {
  return (
    <form>
      <input type="text" name="name" placeholder="이름" value={name} onChange={onChangeByName} />
      <input type="text" name="category" placeholder="분류" value={category} onChange={onChangeByName} />
      <input type="text" name="address" placeholder="주소" value={address} onChange={onChangeByName} />
      <button type="submit">등록</button>
    </form>
  );
}
