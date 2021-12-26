export default function Input({ restautrant, onChange, onClick }) {
  const { name, type, address } = restautrant;

  const handleChange = ({ target }) => {
    onChange(target.name, target.value);
  };

  return (
    <form onSubmit={onClick}>
      <input
        id="input-task-title"
        name="name"
        type="text"
        placeholder="이름"
        value={name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="type"
        placeholder="분류"
        value={type}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="주소"
        value={address}
        onChange={handleChange}
      />
      <button type="submit">
        추가
      </button>
    </form>
  );
}
