export default function RestaurantView({
  name,
  category,
  address,
  onChangeName,
  onChangeCategory,
  onChangeAddress,
  onClickAdd,
}) {
  return (
    <form aria-label="form">
      <input type="text" aria-label="name" id="name" name="name" placeholder="이름" value={name} onChange={onChangeName} />
      <input type="text" aria-label="category" id="category" name="category" placeholder="분류" value={category} onChange={onChangeCategory} />
    </form>
  );
}
