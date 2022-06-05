export default function Input({
  restaurant, onChange, onClick,
}) {
  const { name, category, address } = restaurant;

  return (
    <form>
      <input
        type="text"
        placeholder="이름"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="분류"
        name="category"
        value={category}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="주소"
        name="address"
        value={address}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </form>
  );
}
