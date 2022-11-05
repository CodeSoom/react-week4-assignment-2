export default function Input({
  restaurantName, category, address, handleChange, handleSubmit,
}) {
  return (
    <div>
      <form>
        <input
          type="text"
          name="restaurantName"
          placeholder="이름"
          value={restaurantName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="분류"
          value={category}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="주소"
          value={address}
          onChange={handleChange}
        />
      </form>
      <button
        type="submit"
        onClick={handleSubmit}
      >
        등록

      </button>

    </div>
  );
}
