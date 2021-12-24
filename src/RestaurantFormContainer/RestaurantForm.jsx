export default function RestaurantForm({
  name,
  category,
  address,
  onChangeName,
  onChangeCategory,
  onChangeAddress,
  onSubmit,
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ name, category, address });
      }}
    >
      <section>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="이름"
          value={name}
          onChange={({ target: { value } }) => onChangeName(value)}
        />
      </section>

      <section>
        <label htmlFor="category">분류</label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="분류"
          value={category}
          onChange={({ target: { value } }) => onChangeCategory(value)}
        />
      </section>

      <section>
        <label htmlFor="address">주소</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="주소"
          value={address}
          onChange={({ target: { value } }) => onChangeAddress(value)}
        />
      </section>

      <section>
        <button type="submit">등록</button>
      </section>
    </form>
  );
}
