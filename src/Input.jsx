export default function Input({
  name, category, address, onChange, onSubmit,
}) {
  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={name}
          onChange={onChange}
        />
        <input
          type="text"
          name="category"
          placeholder="분류"
          value={category}
          onChange={onChange}
        />
        <input
          type="text"
          name="address"
          placeholder="주소"
          value={address}
          onChange={onChange}
        />
      </form>
      <button
        type="submit"
        onClick={onSubmit}
      >
        등록

      </button>

    </div>
  );
}
