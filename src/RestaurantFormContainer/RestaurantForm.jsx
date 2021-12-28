import Input from '../Input';

export default function RestaurantForm({
  value,
  onChange,
  onSubmit,
}) {
  return (
    <form
      style={{ display: 'flex' }}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ ...value });
      }}
    >
      <Input
        required
        label="이름"
        type="text"
        id="name"
        name="name"
        placeholder="이름"
        labelStyle={{ display: 'none' }}
        value={value.name}
        onChange={({ target: { value: name } }) => onChange({ ...value, name })}
      />
      <Input
        required
        label="분류"
        type="text"
        id="category"
        name="category"
        placeholder="분류"
        labelStyle={{ display: 'none' }}
        value={value.category}
        onChange={({ target: { value: category } }) => onChange({ ...value, category })}
      />
      <Input
        required
        label="주소"
        type="text"
        id="address"
        name="address"
        placeholder="주소"
        labelStyle={{ display: 'none' }}
        value={value.address}
        onChange={({ target: { value: address } }) => onChange({ ...value, address })}
      />
      <section>
        <button type="submit">등록</button>
      </section>
    </form>
  );
}
