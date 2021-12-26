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
    </form>
  );
}
