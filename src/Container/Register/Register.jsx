export default function Register(
  {
    name, category, address,
    handleChange, handleClick,
  },
) {
  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="이름"
        value={name}
        onChange={handleChange('name')}
      />
      <input
        name="category"
        type="text"
        placeholder="분류"
        value={category}
        onChange={handleChange('category')}
      />
      <input
        name="address"
        type="text"
        placeholder="주소"
        value={address}
        onChange={handleChange('address')}
      />
      <button type="button" onClick={handleClick}>
        등록
      </button>
    </div>
  );
}
