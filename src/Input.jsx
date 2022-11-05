export default function Input({
  restaurantName, category, address, onChange, onSubmit,
}) {
  return (
    <div>
      <form>
        <input
          type="text"
          name="restaurantName"
          placeholder="이름"
          value={restaurantName}
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
